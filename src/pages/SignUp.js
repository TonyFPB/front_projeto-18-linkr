import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import { FormsSign, LeftSide, RightSide, SignStyled, PopUp} from "../assets/SignStyles";
import { ThreeDots } from 'react-loader-spinner';
import { BASE_URL } from "../constants/url";

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const swal = withReactContent(Swal)

    function errors(error) {
        
        if (error.status === 409) {
            swal.fire({
                icon: "error",
                title: <PopUp>Account already exists.</PopUp>,
                background: "#333333 ",
                confirmButtonColor:"red",
                confirmButtonText:<PopUp>OK</PopUp>
            })
        }
        if (error.status === 422) {
            error.data.message.forEach((e, i) => {
                if (e.includes('image')) {
                    error.data.message[i] = 'invalid "image" Type'
                }
            });
            
            swal.fire({
                icon: "error",
                title: <PopUp>{error.data.message.join(", ")}</PopUp>,
                background: "#333333 ",
                confirmButtonColor:"red",
                confirmButtonText:<PopUp>OK</PopUp>
            })
        }
        setLoading(false)
    }

    function signUp(e) {
        setLoading(true)
        e.preventDefault()
        const URL = `${BASE_URL}/signup`
        const body = { email, password, name, image }
        const promisse = axios.post(URL, body)
        promisse
            .then(res => {
                swal.fire({
                    icon: "success",
                    title: <PopUp>Account created. Returning to the sign in page.</PopUp>,
                    background: "#333333 ",
                    confirmButtonColor:"#1877F2",
                    confirmButtonText:<PopUp>OK</PopUp>
                }).then(result => {
                    setLoading(false)
                    navigate('/')
                })
            })
            .catch(err => errors(err.response))
    }
    return (
        <SignStyled>
            <LeftSide>
                <h1>linkr</h1>
                <p>save, share and discover <br /> the best links on the web</p>
            </LeftSide>
            <RightSide>
                <FormsSign onSubmit={signUp}>
                    <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder="e-mail" required />
                    <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder="password" required />
                    <input value={name} onChange={e => setName(e.target.value)} type='username' placeholder="username" required />
                    <input value={image} onChange={e => setImage(e.target.value)} type='url' placeholder="picture url" required />
                    <button disabled={loading} type="submit">
                        {loading ?
                            <ThreeDots
                                height="40"
                                width="40"
                                radius="9"
                                color="#FFFFFF"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            />
                            :
                            "Sign Up"
                        }
                    </button>
                </FormsSign>
                <Link to="/">Switch back to log in</Link>
            </RightSide>
        </SignStyled>
    )
}