import {
  StyledHeader,
  StyledImageDiv,
  StyledSearch,
} from "../assets/HeaderStyles";
import { AiOutlineSearch, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from "react";
//{/* Maris */}
import UserSearch from "./UserSearch";
import styled from "styled-components";
//{/* Maris */}
import noUser from '../assets/image/noUser.jpg'
export default function Header(props) {
  const { setHide, hide, userImage } = props;

  return (
    <StyledHeader>
      <p>linkr</p>

      <SearchArea>
        <UserSearch mobile={false} setUserSelected={props.setUserSelected} />
      </SearchArea>

      <StyledImageDiv onClick={setHide}>
        {hide ? <AiOutlineDown /> : <AiOutlineUp />}
        <img src={userImage ? userImage : noUser} />
      </StyledImageDiv>
    </StyledHeader>
  );
}

const SearchArea = styled.div`
  display: flex;
  flex-direction: column;
  /* flex: 1; */
  align-items: center;
  width: 40%;
`;
