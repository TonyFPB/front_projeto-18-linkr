import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import InputComment from "./inputComment"
import SingleComment from "./singleComment"

export default function Comments({ post_id, isCommentSend, setIsCommentSend }) {
    const [comments, setComments] = useState([])
    const [inputComment, setInputComments] = useState('')


    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };

        const promisse = axios.get(`${process.env.REACT_APP_URL_API}/comments/${post_id}`, config)
        promisse.then(res => {
            if (res.data.length !== 0) {
                setComments(res.data[0].comments)
            }

        }).catch(err => console.log(err))

    }, [isCommentSend])
    return (
        <StyledComment>
            <ul>
                {comments.map(c => <SingleComment key={c.id} comment={c} />)}
            </ul>
            <InputComment post_id={post_id} isCommentSend={isCommentSend} setIsCommentSend={setIsCommentSend} inputComment={inputComment} setInputComments={setInputComments} />
        </StyledComment>
    )
}

const StyledComment = styled.div`

    display: flex;
    flex-direction: column;
    background: #1E1E1E;
    border-radius: 16px;
    padding: 0 25px 0 25px;
`