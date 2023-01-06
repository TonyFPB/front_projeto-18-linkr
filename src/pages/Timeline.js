import Header from "../components/Header";
import { StyledSearchTimeline, StyledTimeline } from "../assets/TimelineStyles";
import { Overlay } from "../assets/HeaderStyles";
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Timeline() {
    const [hide,setHide] = useState(true)
    const navigate = useNavigate()
    function logOut(){
        localStorage.removeItem("token");
        navigate("/")
    }

    return (
        <>
            <Header  setHide={()=>setHide(!hide)} hide={hide}/>
            <StyledTimeline>
                <StyledSearchTimeline>
                    <AiOutlineSearch />
                    <input placeholder="Search for people" />
                </StyledSearchTimeline>
                {hide ? ''
                    :
                    <Overlay onClick={()=>setHide(!hide)}>
                        <div onClick={logOut}>Logout</div> 
                    </Overlay>
                }
            </StyledTimeline>
        </>
    )
}