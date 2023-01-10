import Header from "../components/Header";
import { StyledSearchTimeline, StyledTimeline } from "../assets/TimelineStyles";
import { Overlay } from "../assets/HeaderStyles";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserSearch from "../components/UserSearch";
import styled from "styled-components";
//import TimelineUser from "./TimelineUser";

import FeedContainer from "../components/feedConatiner";
import Trending from "../components/Trending/Trending";
import FeedHashtagContainer from "../components/HashtagFeed";

export default function Timeline() {
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
  const [userSelected, setUserSelected] = useState(null);

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
          {/* {userSelected !== null ? (
          <TimelineUser user={userSelected} setUserSelected={setUserSelected} />
        ) : (
          <FeedHashtagContainer setUserSelected={setUserSelected} />
        )} */}
          <FeedHashtagContainer
            user={userSelected}
            setUserSelected={setUserSelected}
          />

          <Trending></Trending>
        </ContainerTrendsFeed>
      </StyledTimeline>
      {/* {( userSelected !== null) &&  <TimelineUser  user={userSelected} />} */}
    </>
  );
}

const ContainerTrendsFeed = styled.div`
  display: flex;
`;
