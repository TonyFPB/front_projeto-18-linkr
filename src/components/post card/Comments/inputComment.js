import styled from "styled-components"
import { useUserImageProvider } from "../../../contexts/image.context"
import { IoPaperPlaneOutline } from 'react-icons/io5'
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { PopUp } from "../../../assets/SignStyles";
import { useNavigate } from "react-router-dom";


export default function InputComment({ post_id, inputComment, setInputComments, isCommentSend, setIsCommentSend }) {
    const { userImage } = useUserImageProvider()
    const swal = withReactContent(Swal)
    const navigate = useNavigate()

    function erros(err) {
        if (err.status === 404) {
            swal.fire({
                icon: "error",
                title: <PopUp>{err.data.message}</PopUp>,
                background: "#333333",
                confirmButtonColor: "red",
                confirmButtonText: <PopUp>OK</PopUp>,
            });
        } if (err.status === 401) {
            swal.fire({
                icon: "error",
                title: <PopUp>You are no longer logged in. Back to the sign in page.</PopUp>,
                background: "#333333",
                confirmButtonColor: "red",
                confirmButtonText: <PopUp>OK</PopUp>,
            });
            navigate('/')
        } if (err.status === 422) {
            swal.fire({
                icon: "error",
                title: <PopUp>{err.data.message[0]}</PopUp>,
                background: "#333333",
                confirmButtonColor: "red",
                confirmButtonText: <PopUp>OK</PopUp>,
            });
        }
    }

    function sendComment() {
        const config = {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        };
        const body = { comment: inputComment }
        const promisse = axios.post(`${process.env.REACT_APP_URL_API}/comments/${post_id}`, body,config)
        promisse
            .then(res => {
                setIsCommentSend(!isCommentSend)
                setInputComments('')
            })
            .catch(err => {
                console.log(err.response)
                erros(err.response)
            })
    }

    return (
        <StyledInputComment>
            <img src={userImage} />
            <input
                placeholder="write a comment..."
                value={inputComment}
                onChange={(e) => setInputComments(e.target.value)}
            />
            <IoPaperPlaneOutline onClick={sendComment} />
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