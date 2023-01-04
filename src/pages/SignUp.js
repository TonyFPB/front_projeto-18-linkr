import { Link } from "react-router-dom";
import { FormsSign, LeftSide, RightSide, SignStyled } from "../assets/SignStyles";

export default function SignUp() {
    return (
        <SignStyled>
            <LeftSide>
                <h1>linkr</h1>
                <p>save, share and discover <br/> the best links on the web</p>
            </LeftSide>
            <RightSide>
                <FormsSign>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <button>Sign Up</button>
                </FormsSign>
                <Link to="/">Switch back to log in</Link>
            </RightSide>
        </SignStyled>
    )
}