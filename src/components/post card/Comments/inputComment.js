import styled from "styled-components"
import { useUserImageProvider } from "../../../contexts/image.context"
import { IoPaperPlaneOutline } from 'react-icons/io5'


export default function InputComment({ inputComment, setInputComments }) {
    const { userImage } = useUserImageProvider()
    return (
        <StyledInputComment>
            <img src={userImage} />
            <input
                placeholder="write a comment..."
                value={inputComment}
                onChange={(e) => setInputComments(e.target.value)}
            />
            <IoPaperPlaneOutline />
        </StyledInputComment>
    )
}

const StyledInputComment = styled.div`
    display: flex;
    width: 100%;
    margin: 19px 0 25px 0;
    position: relative;
    img{
        margin: 0 14px 0 0;
        width: 39px;
        height: 39px;
        border-radius: 26.5px;   
    }
    input{
        width: 100%;
        background: #252525;
        border-radius: 8px;
        border-style: none;

        font-family: 'Lato';
        font-style: italic;
        font-weight: 400;
        font-size: 14px;
        padding: 0 40px 0 15px;
        color: #F3F3F3;
        ::placeholder{
            font-family: 'Lato';
            font-style: italic;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.05em;
            color: #575757;
        }
    }
    svg{
        font-size: 20px;
        position: absolute;
        right: 12px;
        top:10px;
        color: #F3F3F3;
        
        :hover{
            cursor: pointer;
        }
    }
`