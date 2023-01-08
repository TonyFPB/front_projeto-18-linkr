import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"
import NewPostCard from "./newPost.js"
import PostCard from "./postCard";

function getheader() {
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return header;
  }

export default function FeedContainer () {
    const [data, setData] = useState(undefined)
    const [erro, setErro] = useState(undefined)

    const {token} = JSON.parse(localStorage.getItem("user"))
    
    const header = getheader();
    

    useEffect(()=>{
        const config = { headers: header };
        const url = `${process.env.REACT_APP_URL_API}/post`
        const promisse = axios.get(url, config);
        promisse.then((res) => setData(res.data))
        promisse.catch((erro) => setErro(erro.response.data))
    },[])

    console.log(data)
    return (
        <Feed>
            <Title>timeline</Title>
            <NewPostCard/>
            <Container>
                {data ? data.length === 0 ? "There are no posts yet" : data.map(data => <PostCard data={data} key={data.id}/>) 
                : erro ? "An error occured while trying to fetch the posts, please refresh the page" : "Loading..."}
            </Container>
        </Feed>
    )
}

const Feed= styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;
`
const Title = styled.p`
    font-family: Oswald;
    font-size: 43px;
    font-weight: 700;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: left;
    color: #fff;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`


