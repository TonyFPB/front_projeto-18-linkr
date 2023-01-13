import styled from "styled-components";
import { ReactTagify } from "react-tagify";
import { FaPencilAlt } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Delete from "./delete";
import { useNavigate } from "react-router-dom";

function getheader() {
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  return header;
}

export default function NameAndMessage({ data, setUserSelected, timeline }) {
  const { id,feed_user, post_user, owner, name, message, url } = data;
  const navigate = useNavigate();
  const [edit, setEdit] = useState(false);
  console.log(data)
  const [msg, setMsg] = useState(message);
  const [newMsg, setNewMsg] = useState(msg);
  const [editLoad, setEditLoad] = useState(false);

  const header = getheader();
  const config = { headers: header };
  const axiosUrl = `${process.env.REACT_APP_URL_API}/post/${id}`;

  const tagStyle = {
    color: "#fff",
    cursor: "pointer",
    fontWeight: 700
  }

  async function searchPeopleByid(idUser) {
    try {
      const url = `${process.env.REACT_APP_URL_API}/user/${idUser}`;
      await axios.get(url, { headers: header }).then((response) => {
        setUserSelected(response.data);
      });
    } catch (error) {console.log(error)}
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

  useEffect(()=>setMsg(message),[message]) 

  return (
    <>
      <Top>
        <Name onClick={() => navigate(`/user/${post_user}`)}>{name}</Name>
        {owner ? (
          <div>
            <FaPencilAlt
              className="icon"
              color={"#fff"}
              size={18}
              disabled={editLoad}
              onClick={() => {
                if (!editLoad) {
                  setNewMsg(msg);
                  setEdit(!edit);
                }
              }}
            />
            <Delete timeline={timeline} id={id} />
          </div>
        ) : (
          <></>
        )}
      </Top>
      {edit ? (
        <NewInput
          value={newMsg}
          disabled={editLoad}
          onChange={(e) => setNewMsg(e.target.value)}
          onKeyDown={toUpdate}
        />
      ) : (
        <ReactTagify
          tagStyle={tagStyle}
          tagClicked={(hashtag) =>
            navigate(`/hashtag/${hashtag.replace("#", "")}`)
          }
        >
          <Message>{msg}</Message>
        </ReactTagify>
      )}
    </>
  );
}

const Name = styled.p`
  font-family: Lato;
  font-size: 19px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;

  cursor: pointer;
`;
const Message = styled.p`
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

const Top = styled.div`
  max-width: 503px;
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
