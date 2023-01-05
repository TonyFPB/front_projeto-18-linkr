import styled from "styled-components"

export default function Trendings({hashtag}){
    return(
        <Hashtag onClick={()=> console.log(hashtag)}>{`#${hashtag}`}</Hashtag>
    )
}

const Hashtag = styled.div`
    font-family: 'Oswald';
    color: #fff;
    font-size: 19px;
    font-weight: 700;
    margin-bottom: 10px;
`