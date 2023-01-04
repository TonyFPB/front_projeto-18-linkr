import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FormsSign, LeftSide, RightSide, SignStyled } from "../assets/SignStyles";
import { BASE_URL } from "../constants/url";
import { ThreeDots } from 'react-loader-spinner'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    function logIn(e) {
        console.log('a')
        e.preventDefault()
        setLoading(true)

        if (email && password) {

            const url = `${BASE_URL}/signin`
            const body = { email, password }
            const promisse = axios.post(url, body)
            promisse
                .then(res => { setLoading(false); console.log(res) })
                .catch(err => { setLoading(false); console.log(err) })
        } else {
            alert('nao')
        }
    }
    return (
        <SignStyled>
            <LeftSide>
                <h1>linkr</h1>
                <p>save, share and discover <br /> the best links on the web</p>
            </LeftSide>
            <RightSide>
                <FormsSign onSubmit={logIn}>
                    <input
                        placeholder="e-mail"
                        value={email}
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        placeholder="password"
                        value={password}
                        type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" disabled={loading}>
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
                            "Log In"
                        }
                    </button>
                </FormsSign>
                <Link to="/sign-up">First time? Create an account!</Link>
            </RightSide>
        </SignStyled>
    )
}