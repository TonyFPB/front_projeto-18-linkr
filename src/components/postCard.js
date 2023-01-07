import styled from "styled-components";
import ReactTooltip from "react-tooltip";
import { useContext, useEffect, useState } from "react";
import { BsFillHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function PostCard({ data }) {
    console.log(data)
    const { id, owner, image, name, message, url, metadata } = data
    const [like, setLike] = useState(true);
    const { user } = useContext(UserContext)

    const config = {
        headers: {
            Authorization: `Bearer ${user}`
        }
    }

    function getAllLikes() {

        axios.get(`${process.env.REACT_APP_URL_API}/likes/${id}`, config)
            .then(res => {
                ReactTooltip.rebuild();
                setLike(res.data)
            })
    }

    useEffect(() => {
        getAllLikes()
    }, [])

    function likeAndDislikePost() {
        if (!like) {
            axios.post(`${process.env.REACT_APP_URL_API}/likes/}${id}`, { post_id: id }, config).then(res => getAllLikes()).catch(() => "Ação indisponível, por favor tente novamente!")
        }
        axios.delete(`${process.env.REACT_APP_URL_API}/likes/}${id}`, config).then(res => getAllLikes()).catch(() => "Ação indisponível, por favor tente novamente!")
    }
    return (
        <Card>
            <Img src={image} alt="user icon" />

            {
                like
                    ?
                    <BsFillHeartFill onClick={likeAndDislikePost} />
                    :
                    <BsHeart onClick={likeAndDislikePost} />
            }

            <div className="div">
                <Name>{name}</Name>
                <Message>{message}</Message>
                <Url href={url} target="_blank" rel="noopener noreferrer">
                    <div>
                        <UrlTitle>{metadata.title}</UrlTitle>
                        <UrlContent>{metadata.description}</UrlContent>
                        <UrlFotmat>{url}</UrlFotmat>
                    </div>
                    <UrlImg src={metadata.image} alt="url image" />
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