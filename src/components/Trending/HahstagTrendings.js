import styled from "styled-components"
import ReactHashtag from "@mdnm/react-hashtag";
import { useNavigate } from "react-router-dom";

export default function Trendings({hashtag}){
    
    const navigate = useNavigate()

    return(
        <Hashtag onClick={()=> console.log(hashtag)}><ReactHashtag onHashtagClick={hashtag=> navigate(()=> `/hashtag/${hashtag.replace("#","")}`)}>{`#${hashtag}`}</ReactHashtag></Hashtag>
    )
}

const Hashtag = styled.div`
    font-family: 'Oswald';
    color: #fff;
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 10px;
    span{
        cursor: pointer;
    }
`