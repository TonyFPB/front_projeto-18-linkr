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
  const [follow, setFollow] = useState(false)
  const [disable, setDisable] = useState(true)
  const navigate = useNavigate();
  const [userSelected, setUserSelected] = useState({});
  const swal = withReactContent(Swal);
  const {id} = useParams()
  const token = localStorage.getItem("token")
  const config = {
      headers: {
          Authorization: `Bearer ${token}`
      }
  }
  const swalConfig = {
      icon: "error",
      title: <PopUp>Oparation is failed</PopUp>,
      background: "#333333 ",
      confirmButtonColor: "red",
      confirmButtonText: <PopUp>OK</PopUp>,
}
  function logOut() {
    localStorage.removeItem("token");
    navigate("/");
  }


  async function followAndUnfollow(){

    setDisable(true)

    if (follow){

    axios.delete(`${process.env.REACT_APP_URL_API}/user/${id}/follow`,config)
    .then(res => {setDisable(false)
       setFollow(false)})
    .catch(err => {console.log(err.response.data) 
      swal.fire(swalConfig)}
)

    } else {
    axios.post(`${process.env.REACT_APP_URL_API}/user/${id}/follow`,{},config)
    .then(res => {setDisable(false)
       setFollow(true)})
    .catch(err => {console.log(err.response.data)
       swal.fire(swalConfig)})
    }
    
  }

  useEffect(() => {
    const url = `${process.env.REACT_APP_URL_API}/user`;
    setDisable(true)
    const promisse = axios.get(url, config);
    promisse
      .then((res) => {
        setUserImage(res.data.image);
        
        //navigate(`/user/${id}`);
      })
      .catch((err) => {
        console.log("sim")
        // swal.fire({
        //   icon: "error",
        //   title: <PopUp>You are no longer logged in. Back to the sign in page.</PopUp>,
        //   background: "#333333 ",
        //   confirmButtonColor: "red",
        //   confirmButtonText: <PopUp>OK</PopUp>,
        // });
        // navigate("/")
      })
      
      axios.get(`${process.env.REACT_APP_URL_API}/user/${id}/follows`,config)
      .then(res=> {setFollow(res.data) 
      setDisable(false)})
      .catch(err=> console.log(err.response.data))
  }, [id]);
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
          <ButtonTrendingContainer follow={follow}>
            <button onClick={()=> followAndUnfollow()} disabled={disable}>{follow ? "Unfollow": "Follow"}</button>
            <Trending></Trending>
          </ButtonTrendingContainer>
        </ContainerTrendsFeed>
      </StyledTimeline>
    </>
  );
}

const ButtonTrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  button{
    margin-top: 68px;
    width: 112px;
    height: 31px;
    border: none;
    border-radius: 5px;
    background-color: ${props => props.follow===true ? "#fff" : "#1877F2"};
    color: ${props => props.follow===true ? "#1877F2" : "#fff"};
    font-family: 'Lato';
    font-size: 14px;
    font-weight: 700;
    :disabled{
      opacity: 0.6;
    }
  }
`

const ContainerTrendsFeed = styled.div`
  display: flex;
`;
