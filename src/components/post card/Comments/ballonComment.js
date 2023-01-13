import { useEffect, useState } from 'react'
import { AiOutlineComment } from 'react-icons/ai'
import styled from 'styled-components'

export default function BallonComment() {
    const [numberComments, setNumberComments]= useState(0)
    useEffect(()=>{

    },[])
    return (
        <StyledBallonComment>
            <AiOutlineComment size={"25px"} />
            <p>{numberComments} comments</p>
        </StyledBallonComment>
    )
}

const StyledBallonComment = styled.div`
    width:67px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #FFFFFF;
    text-align: center; 
`