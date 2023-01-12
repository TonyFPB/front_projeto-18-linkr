import Header from "../components/Header";
import { StyledSearchTimeline, StyledTimeline } from "../assets/TimelineStyles";
import { Overlay } from "../assets/HeaderStyles";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserSearch from "../components/UserSearch";
import styled from "styled-components";

import FeedContainer from "../components/feedConatiner";

import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { PopUp } from "../assets/SignStyles";

import Trending from "../components/Trending/Trending";
import UserFeedContainer from "../components/UserFeed";

export default function UserPage() {
  const [hide, setHide] = useState(true);
  const [userImage, setUserImage] = useState("");
  const navigate = useNavigate();
  const [userSelected, setUserSelected] = useState({});
  const swal = withReactContent(Swal);
  const {id} = useParams()
  function logOut() {
    localStorage.removeItem("token");
    navigate("/");
  }

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const url = `${process.env.REACT_APP_URL_API}/user`;
    const promisse = axios.get(url, config);
    promisse
      .then((res) => {
        console.log(res.data)
        setUserImage(res.data.image);
        //navigate(`/user/${id}`);
      })
      .catch((err) => {
        // swal.fire({
        //   icon: "error",
        //   title: <PopUp>You are no longer logged in. Back to the sign in page.</PopUp>,
        //   background: "#333333 ",
        //   confirmButtonColor: "red",
        //   confirmButtonText: <PopUp>OK</PopUp>,
        // });
        // navigate("/")
      });
  }, []);
  return (
    <>
      <Header
        setHide={() => setHide(!hide)}
        hide={hide}
        setUserSelected={setUserSelected}
        userImage={userImage}
        userSelected={userSelected}
      />
      <StyledTimeline>
        <UserSearch mobile={true} setUserSelected={setUserSelected} />

        {hide ? (
          ""
        ) : (
          <Overlay onClick={() => setHide(!hide)}>
            <div onClick={logOut}>Logout</div>
          </Overlay>
        )}
        <ContainerTrendsFeed>
          <UserFeedContainer
            userImage={userImage}
            setUserSelected={setUserSelected}
            user={userSelected}
          />
          <Trending></Trending>
        </ContainerTrendsFeed>
      </StyledTimeline>
    </>
  );
}

const ContainerTrendsFeed = styled.div`
  display: flex;
`;