import axios from "axios";
import { useEffect, useState } from "react";
import { BiRepost } from "react-icons/bi";
import styled from "styled-components";
import Modal from "react-modal";
import Swal from "sweetalert2";

function getheader() {
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  return header;
}

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

export default function Repost({ post_id }) {
  const [count, setCount] = useState(0);
  const [avaible, setAvaible] = useState(false);
  const [allowed, setAllowed] = useState(true);

  const [modal, setModal] = useState(false);
  const [modalLoad, setModalLoad] = useState(false);

  function newRepost() {
    setModalLoad(true);

    const header = getheader();
    const config = { headers: header };
    const body = {}
    const url = `${process.env.REACT_APP_URL_API}/repost/${post_id}`;

    axios
      .post(url, body, config)
      .then(() => {
        setModal(false);
        setModalLoad(false);
        setCount(count + 1)
      })
      .catch(() => {
        Swal.fire("Ops :/", "Something went wrong, try again!", "error");
        setModalLoad(false);
      });
  }

  function toRepost() {
    if (!allowed) return;

    const header = getheader();
    const config = { headers: header };
    const url = `${process.env.REACT_APP_URL_API}/repost/${post_id}`;

    if (avaible) {
      setModal(true);
    } else {
      axios.delete(url, config)
      .then(() => setCount(count - 1))
      .catch(err => console.log(err))
    }
  }

  useEffect(() => {
    const header = getheader();
    const config = { headers: header };
    const url = `${process.env.REACT_APP_URL_API}/repost/${post_id}`;

    axios
      .get(url, config)
      .then((res) => {
        setCount(res.data.rowCount);
        setAvaible(res.data.avaible);
        setAllowed(res.data.allowed);
      })
      .catch((erro) => console.log(erro.response.data));
  }, [post_id]);

  return (
    <>
      <Modal
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalStyled>
          {modalLoad ? (
            <p>Loading...</p>
          ) : (
            <>
              <p>Do you want to re-post this link?</p>
              <div>
                <button className="no" onClick={() => setModal(false)}>
                  No, cancel.
                </button>

                <button onClick={newRepost}>Yes, share it!</button>
              </div>
            </>
          )}
        </ModalStyled>
      </Modal>
      <Div>
        <BiRepost
          size={27}
          color="#FFFFFF"
          className="svg"
          onClick={toRepost}
        />
        <Text>{`${count} re-post`}</Text>
      </Div>
    </>
  );
}

const Div = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  .svg {
    cursor: pointer;
  }
`;
const Text = styled.p`
  font-family: Lato;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: center;
  color: #fff;

  display: block;
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
