import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import InputComment from "./inputComment"
import SingleComment from "./singleComment"

export default function Comments({ post_id }) {
    const [comments, setComments] = useState([])
    const [inputComment, setInputComments] = useState('')

    useEffect(() => {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };
        const promisse = axios.get(`${process.env.REACT_APP_URL_API}/comments/${post_id}`, config)
        promisse.then(res => {
            if (res.data.length !== 0) {
                console.log(res.data)
                setComments(res.data[0].comments)
            }

        }).catch(err => console.log(err))
    }, [])
    return (
        <StyledComment>
            <ul>
                {comments.map(c => <SingleComment key={c.id} comment={c} />)}
            </ul>
            <InputComment inputComment={inputComment} setInputComments={setInputComments} />
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