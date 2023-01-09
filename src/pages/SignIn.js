import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormsSign,
  LeftSide,
  PopUp,
  RightSide,
  SignStyled,
} from "../assets/SignStyles";
import { ThreeDots } from "react-loader-spinner";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const swal = withReactContent(Swal);

  function errors(error) {
    if (error.status === 401) {
      swal.fire({
        icon: "error",
        title: <PopUp>{error.data.message}</PopUp>,
        background: "#333333",
        confirmButtonColor: "red",
        confirmButtonText: <PopUp>OK</PopUp>,
      });
    }
    if (error.status === 422) {
      swal.fire({
        icon: "error",
        title: <PopUp>{error.data.message.join(", ")}</PopUp>,
        background: "#333333 ",
        confirmButtonColor: "red",
        confirmButtonText: <PopUp>OK</PopUp>,
      });
    }
  }

  function logIn(e) {
    e.preventDefault();
    setLoading(true);

    if (email && password) {
      const url = `${process.env.REACT_APP_URL_API}/signin`;
      const body = { email, password };
      const promisse = axios.post(url, body);
      promisse
        .then((res) => {
          setLoading(false);
          localStorage.setItem("token", res.data.token);
          navigate("/timeline");
        })
        .catch((err) => {
          errors(err.response);
          setLoading(false);
        });
    }
  }
  return (
    <SignStyled>
      <LeftSide>
        <h1>linkr</h1>
        <p>
          save, share and discover <br /> the best links on the web
        </p>
      </LeftSide>
      <RightSide>
        <FormsSign onSubmit={logIn}>
          <input
            placeholder="e-mail"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="password"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? (
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
            ) : (
              "Log In"
            )}
          </button>
        </FormsSign>
        <Link to="/sign-up">First time? Create an account!</Link>
      </RightSide>
    </SignStyled>
  );
}
