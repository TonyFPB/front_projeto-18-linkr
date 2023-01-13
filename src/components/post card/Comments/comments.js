import styled from "styled-components"
import InputComment from "./inputComment"
import SingleComment from "./singleComment"

export default function Comments() {
    return (
        <StyledComment>
            <SingleComment></SingleComment>
            <SingleComment></SingleComment>
            <SingleComment></SingleComment>
            <InputComment></InputComment>
        </StyledComment>
    )
}

const StyledComment =styled.ul`
    display: flex;
    flex-direction: column;
    background: #1E1E1E;
    border-radius: 16px;
    padding: 0 25px 0 25px;
`