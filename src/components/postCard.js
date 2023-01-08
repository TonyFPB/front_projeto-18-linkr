import styled from "styled-components"
import {FaPencilAlt, FaTrashAlt} from "react-icons/fa"
import Modal from "react-modal"
import { useState } from "react"
import axios from "axios";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height: "262px",
      width: "597px",
      borderRadius: "50px",
      backgroundColor: "#333333"
    },
  };

function getheader() {
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return header;
  }

export default function PostCard ({data, timeline}) {
    const {id, owner, image, name, message, url, metadata} = data
    const [modal, setModal] = useState(false)
    const [modalLoad, setModalLoad] = useState(false)

    const header = getheader();
    const config = { headers: header };
    const axiosUrl = `${process.env.REACT_APP_URL_API}/post/${id}`


    function toDelete () {
        setModalLoad(true)

        const promisse = axios.delete(axiosUrl, config)
        promisse.then(() => {setModal(false); timeline()})
        promisse.catch(erro => console.log(erro.response.data))
    }

    return (
        <Card>
            <Modal 
                isOpen={modal}
                onRequestClose={() => setModal(false)}
                style={customStyles}
            >
                <ModalStyled>
                    {modalLoad ? <p>Loading...</p> :
                        <>
                            <p>Are you sure you want to delete this post?</p>
                            <div>
                                <button className="no" 
                                onClick={() => setModal(false)}>No, go back.</button>

                                <button onClick={toDelete}>Yes, delete it.</button>
                            </div>
                        </>
                    }
                </ModalStyled>

            </Modal>

            <Img src={image} alt="user icon"/>
            <div className="div">
                <Top>
                    <Name>{name}</Name>
                    {owner ? 
                        <div>
                            <FaPencilAlt className="icon" color={"#fff"} size={18}/>
                            <FaTrashAlt className="icon" color={"#fff"} size={18} onClick={() => setModal(true)}/>
                        </div> : <></>
                    }
                </Top>
                <Message>{message}</Message>
                <Url href={url} target="_blank" rel="noopener noreferrer">
                    <div>
                        <UrlTitle>{metadata.title}</UrlTitle>
                        <UrlContent>{metadata.description}</UrlContent>
                        <UrlFotmat>{url}</UrlFotmat>
                    </div>
                    <UrlImg src={metadata.image} alt="url image"/>
                </Url>
            </div>
        </Card>
    )
}


const Card = styled.div`
    height: 276px;
    width: 611px;
    border-radius: 16px;
    background-color: #171717;
    box-sizing: border-box;

    display: flex;
    
    .div {
        width: 100%;     
        height: 100%;
        padding: 15px;
    }

    .modal {
        height: 262px;
        width: 597px;
        border-radius: 50px;

    } 
`
const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;

    margin-top: 18px;
    margin-left: 18px;
`
const Name = styled.p`
    font-family: Lato;
    font-size: 19px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
`
const Message = styled.p`
    font-family: Lato;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #B7B7B7;

    display: block;
    height: 52px;
    width: 502px;
    margin: 7px 0;
`
const Url = styled.a`
    height: 155px;
    width: 503px;
    border-radius: 11px;
    border: 1px solid #4D4D4D;

    display: flex;
    justify-content: space-between;

    overflow: hidden;

    cursor: pointer;

    text-decoration: none;

    div {
        display: flex;
        flex-direction: column;
        gap: 7px;

        padding: 20px;
    }
`
const UrlTitle = styled.p`
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #CECECE;

    display: block;
    width: 300px;
`
const UrlContent = styled.p`
    font-family: Lato;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
    color:#9B9595;

    display: block;
    width: 300px;
`
const UrlFotmat = styled.p`
    font-family: Lato;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
    color:#CECECE;

    display: block;
    width: 300px;
`
const UrlImg = styled.img`
    height: 155px;
    width: 153.44039916992188px;
`
const Top = styled.div`
    width: 503px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    div {
        display: flex;
        gap: 12px;
        
        .icon {
            cursor: pointer;
        }
    }
`
const ModalStyled = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    p {
        font-family: Lato;
        font-size: 30px;
        font-weight: 700;
        line-height: 40.8px;
        letter-spacing: 0em;
        text-align: center;
        color: #FFFFFF;

        display: block;
        height: 82px;
        width: 338px;
    }

    div {
        display: flex;
        gap: 30px;
    }

    div button{
        height: 37px;
        width: 134px;
        border-radius: 5px;
        border: none;
        background-color: #1877F2;

        font-family: Lato;
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        color:#FFFFFF;

        cursor: pointer;
    }

    div .no {
        background-color: #FFFFFF;
        color: #1877F2;
    }
`