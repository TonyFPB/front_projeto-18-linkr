import { Overlay, StyledHeader, StyledImageDiv, StyledSearch } from "../assets/HeaderStyles";
import { AiOutlineSearch, AiOutlineDown, AiOutlineUp } from "react-icons/ai"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
    const [hide,setHide] = useState(true)
    const navigate = useNavigate()
    function logOut(){
        localStorage.removeItem("token");
        navigate("/")
    }
    return (
        <StyledHeader>
            <p>linkr</p>
            <StyledSearch>
                <AiOutlineSearch />
                <input placeholder="Search for people" />
            </StyledSearch>

            <StyledImageDiv onClick={()=>setHide(!hide)}>
                {hide ? <AiOutlineDown/> : <AiOutlineUp/>}
                <img src="https://media.istockphoto.com/id/1213516345/pt/foto/crazy-looking-black-and-white-border-collie-dog-say-looking-intently-on-bright-yellow.jpg?s=612x612&w=0&k=20&c=th2GBf4K3yeL3KocFHJpKSTtGer-CxnsFkqqJ60PGgc=" />
                {hide ? ''
                    :
                    <Overlay onClick={()=>setHide(!hide)}>
                        <div onClick={logOut}>Logout</div> 
                    </Overlay>
                }
            </StyledImageDiv>
        </StyledHeader>
    )
}