import axios from "axios";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import Modal from "react-modal";
import Swal from "sweetalert2";
import styled from "styled-components";

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

export default function DeleteAndUpdate({ timeline, id }) {
  const [modal, setModal] = useState(false);
  const [modalLoad, setModalLoad] = useState(false);

  const header = getheader();
  const config = { headers: header };
  const axiosUrl = `${process.env.REACT_APP_URL_API}/post/${id}`;

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
    <>
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

      <FaTrashAlt
        className="icon"
        color={"#fff"}
        size={18}
        onClick={() => setModal(true)}
      />
    </>
  );
}

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

