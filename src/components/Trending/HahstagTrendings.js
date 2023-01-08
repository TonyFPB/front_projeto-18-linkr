import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";

export default function Trendings({hashtag}){
    
    const navigate = useNavigate()

    return(
        <ReactTagify colors="#fff" tagClicked={hashtag=> navigate(`/hashtag/${hashtag.replace("#","")}`)}><Hashtag>{`#${hashtag}`}</Hashtag></ReactTagify>
    )
}

const Hashtag = styled.div`
    font-family: 'Oswald';
    color: #fff;
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 11px;
`