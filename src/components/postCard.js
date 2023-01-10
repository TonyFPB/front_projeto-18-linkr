import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";

import {FaPencilAlt, FaTrashAlt} from "react-icons/fa"
import Modal from "react-modal"
import {useRef, useState } from "react"
import axios from "axios";
import Swal from "sweetalert2";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    height: "262px",
    width: "597px",
    borderRadius: "50px",
    backgroundColor: "#333333",
  },
};

function getheader() {
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  return header;
}

export default function PostCard({ data, timeline, user, setUserSelected }) {
  const { id, post_user_id, owner, image, name, message, url, metadata } = data;
    const navigate = useNavigate()

  const [modal, setModal] = useState(false);
  const [modalLoad, setModalLoad] = useState(false);

  const [edit, setEdit] = useState(false);
  const [msg, setMsg] = useState(message);
  const [newMsg, setNewMsg] = useState(msg);
  const [editLoad, setEditLoad] = useState(false);
  const newInput = useRef();

  const header = getheader();
  const config = { headers: header };
  const axiosUrl = `${process.env.REACT_APP_URL_API}/post/${id}`;

  async function searchPeopleByid(idUser) {
    try {
      const url = `${process.env.REACT_APP_URL_API}/user/${idUser}`;
      await axios.get(url, { headers: header }).then((response) => {
        setUserSelected(response.data);
      });
    } catch (error) {}
  }

  function toUpdate(e) {
    if (e.keyCode === 27) {
      setNewMsg(msg);
      return setEdit(false);
    }
    if (e.key === "Enter") {
      setEditLoad(true);

      const promisse = axios.put(axiosUrl, { url, message: newMsg }, config);
      promisse.then(() => {
        setMsg(newMsg);
        setEdit(false);
        setEditLoad(false);
      });
      promisse.catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong, try again!",
          icon: "error",
          confirmButtonText: "Ok!",
        });
        setEditLoad(false);
      });
    }
  }

  function toDelete() {
    setModalLoad(true);

    const promisse = axios.delete(axiosUrl, config);
    promisse.then(() => {
      setModal(false);
      timeline();
    });
    promisse.catch(() => {
      Swal.fire("Ops :/", "Something went wrong, try again!", "error");
      setModalLoad(false);
    });
  }

  return (
    <Card>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={customStyles}
      >
        <ModalStyled>
          {modalLoad ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>Are you sure you want to delete this post?</p>
              <div>
                <button className="no" onClick={() => setModal(false)}>
                  No, go back.
                </button>

                <button onClick={toDelete}>Yes, delete it.</button>
              </div>
            </>
          )}
        </ModalStyled>
      </Modal>

      <Img src={image} alt="user icon" />
      <div className="div">
        <Top>
          <Name onClick={() => searchPeopleByid(post_user_id)}>{name}</Name>
          {owner ? (
            <div>
              <FaPencilAlt
                className="icon"
                color={"#fff"}
                size={18}
                disabled={editLoad}
                onClick={() => {
                  if (editLoad) return;
                  setNewMsg(msg);
                  setEdit(!edit);
                }}
              />
              <FaTrashAlt
                className="icon"
                color={"#fff"}
                size={18}
                onClick={() => setModal(true)}
              />
            </div>
          ) : (
            <></>
          )}
        </Top>
        {edit ? (
          <NewInput
            ref={newInput}
            value={newMsg}
            disabled={editLoad}
            onChange={(e) => setNewMsg(e.target.value)}
            onKeyDown={toUpdate}
          />
        ) : (
          <ReactTagify colors="#fff" tagClicked={hashtag=> navigate(`/hashtag/${hashtag.replace("#","")}`)}><Message>{msg}</Message></ReactTagify>
        )}
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
  );
}

const Card = styled.div`
<<<<<<< HEAD
    max-height: 276px;
    max-width: 611px;
    border-radius: 16px;
    background-color: #171717;
    box-sizing: border-box;

    display: flex;

    .div {
        max-width: 100%;     
        max-height: 100%;
        padding: 15px;
    }

    .modal {
        max-height: 262px;
        max-width: 597px;
        border-radius: 50px;
    } 
`
const Img = styled.img`
    max-width: 50px;
    max-height: 50px;
    border-radius: 100%;

    margin-top: 18px;
    margin-left: 18px;

    /* @media (max-width: 611px) {
        height: 100%;
        width: 100%;
        background-color: green;
    } */
`
=======
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
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;

  margin-top: 18px;
  margin-left: 18px;
`;
>>>>>>> 7bf5efe886cb17cba9503eb1c962177920225e81
const Name = styled.p`
  font-family: Lato;
  font-size: 19px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;
const Message = styled.p`
<<<<<<< HEAD
    font-family: Lato;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #B7B7B7;

    display: block;
    height: 52px;
    max-width: 502px;
    margin: 7px 0;
`
const Url = styled.a`
    height: 155px;
    max-width: 503px;
    border-radius: 11px;
    border: 1px solid #4D4D4D;


    display: flex;
    justify-content: space-between;
=======
  font-family: Lato;
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #b7b7b7;

  display: block;
  height: 52px;
  width: 502px;
  margin: 7px 0;
`;
const Url = styled.a`
  height: 155px;
  width: 503px;
  border-radius: 11px;
  border: 1px solid #4d4d4d;

  display: flex;
  justify-content: space-between;
>>>>>>> 7bf5efe886cb17cba9503eb1c962177920225e81

  overflow: hidden;

  cursor: pointer;

  text-decoration: none;

  div {
    display: flex;
    flex-direction: column;
    gap: 7px;

<<<<<<< HEAD
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
    max-width: 300px;
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
    max-width: 300px;
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
    max-width: 300px;
`
const UrlImg = styled.img`
    max-height: 155px;
    max-width: 153.44039916992188px;
`
const Top = styled.div`
    max-width: 503px;
=======
    padding: 20px;
  }
`;
const UrlTitle = styled.p`
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #cecece;

  display: block;
  width: 300px;
`;
const UrlContent = styled.p`
  font-family: Lato;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #9b9595;

  display: block;
  width: 300px;
`;
const UrlFotmat = styled.p`
  font-family: Lato;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #cecece;

  display: block;
  width: 300px;
`;
const UrlImg = styled.img`
  height: 155px;
  width: 153.44039916992188px;
`;
const Top = styled.div`
  width: 503px;
>>>>>>> 7bf5efe886cb17cba9503eb1c962177920225e81

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
`;
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
    color: #ffffff;

    display: block;
    height: 82px;
    width: 338px;
  }

  div {
    display: flex;
    gap: 30px;
  }

  div button {
    height: 37px;
    width: 134px;
    border-radius: 5px;
    border: none;
    background-color: #1877f2;

    font-family: Lato;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
    color: #ffffff;

    cursor: pointer;
  }

  div .no {
    background-color: #ffffff;
    color: #1877f2;
  }
`;
const NewInput = styled.textarea`
  height: 44px;
  width: 503px;
  border-radius: 7px;
  resize: none;
  background-color: #efefef;
  border: none;

  padding-left: 12px;

  margin-top: 7px;
  margin-bottom: 8px;

  font-family: Lato;
  font-size: 15px;
  font-weight: 300;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;

  box-sizing: border-box;

  cursor: ${(props) => (props.disabled ? "wait" : "text")};
`;
