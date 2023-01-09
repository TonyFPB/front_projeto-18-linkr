import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Overlay } from "../assets/HeaderStyles";
import { StyledTimeline } from "../assets/TimelineStyles";
import FeedContainer from "../components/feedConatiner";
import Header from "../components/Header";
import UserSearch from "../components/UserSearch";
import FeedHashtagContainer from "../components/HashtagFeed";

export default function TimelineHashtag() {
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();
  function logOut() {
    localStorage.removeItem("token");
    navigate("/");
  }

    return (
        <>
            <Header  setHide={()=>setHide(!hide)} hide={hide}/>
            <StyledTimeline>
                <UserSearch mobile={true} />
                {hide ? ''
                    :
                    <Overlay onClick={()=>setHide(!hide)}>
                        <div onClick={logOut}>Logout</div> 
                    </Overlay>
                }
                <FeedHashtagContainer/>
            </StyledTimeline>
        </>
    )
}
