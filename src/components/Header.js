import {
  StyledHeader,
  StyledImageDiv
} from "../assets/HeaderStyles";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useEffect } from "react";
//{/* Maris */}
import UserSearch from "./UserSearch";
import styled from "styled-components";
//{/* Maris */}
import noUser from '../assets/image/noUser.jpg'
import { useNavigate } from "react-router-dom";
import { useUserImageProvider } from "../contexts/image.context";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { PopUp } from "../assets/SignStyles";

export default function Header(props) {
  const { setHide, hide, setUserSelected } = props;
  const {userImage, setUserImage} = useUserImageProvider()
  const navigate = useNavigate();
  const swal = withReactContent(Swal)
  

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    const url = `${process.env.REACT_APP_URL_API}/user`;
    const promisse = axios.get(url, config);
    promisse
      .then((res) => {
        setUserImage(res.data.image);
      })
      .catch((err) => {
        if (err.response.status = 401) {
          swal.fire({
            icon: "error",
            title: <PopUp>You are no longer logged in. Back to the sign in page.</PopUp>,
            background: "#333333 ",
            confirmButtonColor: "red",
            confirmButtonText: <PopUp>OK</PopUp>,
          });
          navigate("/")
        }
      });
  }, []);

  return (
    <StyledHeader>
      <p onClick={() => { setUserSelected(null); navigate('/timeline') }}>linkr</p>

      <SearchArea>
        <UserSearch mobile={false} setUserSelected={props.setUserSelected} />
      </SearchArea>

      <StyledImageDiv onClick={setHide}>
        {hide ? <AiOutlineDown /> : <AiOutlineUp />}
        <img src={userImage ? userImage : noUser} alt="" />
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
