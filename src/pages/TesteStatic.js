import Header from "../components/Header";
import { StyledSearchTimeline, StyledTimeline } from "../assets/TimelineStyles";
import { Overlay } from "../assets/HeaderStyles";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserSearch from "../components/UserSearch";
import styled from "styled-components";
import PostCard from "../components/postCard.js";

export default function Timeline() {
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
  // const [timeline, setTimeLine] = useState([]);

  function logOut() {
    localStorage.removeItem("token");
    navigate("/");
  }
  const image =
    "https://media.istockphoto.com/id/1213516345/pt/foto/crazy-looking-black-and-white-border-collie-dog-say-looking-intently-on-bright-yellow.jpg?s=612x612&w=0&k=20&c=th2GBf4K3yeL3KocFHJpKSTtGer-CxnsFkqqJ60PGgc=";

  return (
    <>
      <Header setHide={() => setHide(!hide)} hide={hide} />
      <StyledTimeline>
        <UserSearch mobile={true} />

        {hide ? (
          ""
        ) : (
          <Overlay onClick={() => setHide(!hide)}>
            <div onClick={logOut}>Logout</div>
          </Overlay>
        )}
      </StyledTimeline>

      <StyledContainerMain>
        <ContainerTitle>
          <ImageMain
            src={image}
            display={image !== "" && !undefined ? "display" : "none"}
          />
          <TitleMain>
            {image !== "" && !undefined ? "Juvenal" : "timeline"}{" "}
          </TitleMain>
        </ContainerTitle>

        <ContainerArea>
          <ContainerPost>
            <TitleMain>Post1</TitleMain>
            <TitleMain>Post2</TitleMain>
          </ContainerPost>

          <ContainerTrending>
            <TitleMain>Trending</TitleMain>
          </ContainerTrending>
        </ContainerArea>
      </StyledContainerMain>
    </>
  );
}

const StyledContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 53px;
  margin-left: 241px;

  //mobile
  @media (max-width: 896px) {
    margin-top: 19px;
    margin-left: 17px;
    margin-right: 18px;
  }
`;
const ContainerTitle = styled.div`
  display: flex;
`;
const TitleMain = styled.h1`
  width: 145px;
  height: 64px;
  left: 241px;
  top: 125px;

  font-family: "Oswald";
  font-style: normal;
  font-weight: 700;
  font-size: 43px;
  line-height: 64px;
  color: #ffffff;
`;

const ImageMain = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  margin-right: 18px;
  margin-top: 10px;
  display: ${(props) => props.display};
`;

const ContainerArea = styled.div`
  display: flex;
  margin-left: 10px;
  margin-top: 16px;
`;

const ContainerPost = styled.div``;

const ContainerTrending = styled.div`
  display: display;

  @media (max-width: 896px) {
    display: none;
  }
`;
