import styled from "styled-components"
import { useNavigate } from "react-router-dom";
import { ReactTagify } from "react-tagify";

export default function Trendings({hashtag}){
    
    const navigate = useNavigate(hashtag)
    function teste(){
        navigate(`/hashtag/${hashtag.replace("#","")}`)
    }

    return(
        <ReactTagify colors="#fff" tagClicked={hashtag=> teste(hashtag)}><Hashtag>{`#${hashtag}`}</Hashtag></ReactTagify>
    )
}

const Hashtag = styled.div`
    font-family: 'Lato';
    color: #fff;
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 11px;
`