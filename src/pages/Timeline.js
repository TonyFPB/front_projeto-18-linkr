import Header from "../components/Header";
import { StyledSearchTimeline, StyledTimeline } from "../assets/TimelineStyles";
import { Overlay } from "../assets/HeaderStyles";
import { AiOutlineSearch } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserSearch from "../components/UserSearch";
import styled from "styled-components";

import FeedContainer from "../components/feedConatiner";

import Trending from "../components/Trending/Trending";
import { useUserImageProvider } from "../contexts/image.context";

export default function Timeline() {
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
  const [userSelected, setUserSelected] = useState(null);
  const {userImage} = useUserImageProvider()

  function logOut() {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <>
      <Header
        setHide={() => setHide(!hide)}
        hide={hide}
        setUserSelected={setUserSelected}
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
          <FeedContainer
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
