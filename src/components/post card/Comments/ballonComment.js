import axios from 'axios'
import { useEffect, useState } from 'react'
import { AiOutlineComment } from 'react-icons/ai'
import styled from 'styled-components'

export default function BallonComment({ post_id, isCommentSend, visibleComments, setVisibleComments }) {
    const [numberComments, setNumberComments] = useState(0)
    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };
        setInterval(() => {
            const promisse = axios.get(`${process.env.REACT_APP_URL_API}/comments/amount/${post_id}`, config)
            promisse.then(res => setNumberComments(res.data.ammount)).catch(err => console.log(err))
        },9000)

    }, [isCommentSend])
    return (
        <StyledBallonComment>
            <AiOutlineComment size={"25px"} onClick={() => setVisibleComments(!visibleComments)} />
            <p onClick={() => setVisibleComments(!visibleComments)}>{numberComments} comments</p>
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
    svg,p{
        :hover{
            cursor: pointer;
        }
    } 
`