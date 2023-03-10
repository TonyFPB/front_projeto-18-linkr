import axios from "axios";
import { useState } from "react"
import styled from "styled-components"
import Swal from "sweetalert2";
import noUser from '../assets/image/noUser.jpg'
import { useUserImageProvider } from "../contexts/image.context";
function getheader() {
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return header;
  }

export default function NewPostCard ({timeline}) {
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState({
        url: "",
        message: ""
    })
    const [erro, setErro] = useState("")
    const {userImage} =useUserImageProvider()

    function postar (event) {
        event.preventDefault()

        if (post.url === "") return 

        setLoading(true)

        const header = getheader();
        const config = { headers: header };
        const url = `${process.env.REACT_APP_URL_API}/post`

        const promisse = axios.post(url, post, config)
        promisse.then(() => {setLoading(false); timeline(); setPost({
            url: "",
            message: ""
        })})
        promisse.catch(() => {setLoading(false); Swal.fire("Ops :/", "Something went wrong, try again!", "error");})
    }

    return (
        <Card>
            <Img src={userImage ? userImage : noUser} alt="user icon"/>
            <div className="div">
                <Text>What are you going to share today?</Text>
                <Forms onSubmit={postar}>

                    <Input placeholder="http://..." 
                    type="url" value={post.url} disabled={loading}
                    onChange={(e) => {setPost({...post, url: e.target.value})}}/>

                    <Textarea placeholder="Awesome article about #JavaScript" 
                    type="text" value={post.message} disabled={loading}
                    onChange={(e) => setPost({...post, message: e.target.value})}/>

                    <div>
                        <Button disabled={loading}>{loading ? "Publishing..." : "Publish"}</Button>
                    </div>

                </Forms>
            </div>
        </Card>
    )
}

const Card = styled.div`
    height: 209px;
    width: 611px;
    border-radius: 16px;
    background-color: #FFF;
    box-sizing: border-box;
    margin-bottom: 10px;

    display: flex;
    
    .div {
        width: 100%;
        height: 100%;
        padding: 15px;
    }
`
const Img = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 100%;

    margin-top: 18px;
    margin-left: 18px;
`
const Text = styled.p`
    font-family: Lato;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #707070;

    display: block;
    height: 20px;
    width: 445px;
`
const Forms = styled.form`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 503px;    font-family: Lato;
    font-size: 20px;
    font-weight: 300;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: #707070;


    margin-top: 15px;

    div {
        width: 503px;
        height: 31px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
const Input = styled.input`
    height: 30px;
    width: 100%;
    border-radius: 5px;
    background-color: #EFEFEF;
    border: none;

    padding-left: 12px;

    font-family: Lato;
    font-size: 15px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;

    box-sizing: border-box;
`
const Textarea = styled.textarea`
    height: 70px;
    width: 100%;
    resize: none;
    border-radius: 5px;
    background-color: #EFEFEF;
    border: ${porps => porps.border};

    padding-left: 12px;
    padding-top: 8px;

    font-family: Lato;
    font-size: 15px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;

    box-sizing: border-box;
`
const Button = styled.button`
    height: 31px;
    width: 112px;
    border-radius: 5px;
    border: none;
    background-color: #1877F2;

    font-family: Lato;
    font-size: 14px;
    font-weight: 700;
    line-height: 17px;
    letter-spacing: 0em;
    color: #fff;

    cursor: ${props => props.disabled ? "wait" : "pointer"};
`