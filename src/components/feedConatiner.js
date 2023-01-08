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
  
    function timeline () {
        const header = getheader();
        const config = { headers: header };
        const url = `${process.env.REACT_APP_URL_API}/post`
        const promisse = axios.get(url, config);
        promisse.then((res) => setData(res.data))
        promisse.catch((erro) => setErro(erro.response.data))
    }

    useEffect(timeline,[])

    return (
        <Feed>
            <Title>timeline</Title>
            <NewPostCard timeline={timeline}/>
            <Container>
                {data ? data.length === 0 ? <Message><p>There are no posts yet</p></Message> : data.map(data => <PostCard data={data} key={data.id} timeline={timeline}/>) 
                : erro ? <Message><p>An error occured while trying to fetch the posts, please refresh the page</p></Message>  : <Message><p>Loading...</p></Message> }
            </Container>
        </Feed>
    )
}

const Feed = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 20px;
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
    gap: 15px;
`
const Message = styled.div`
    width: 611px;
    padding-top: 50px;

    p {
        font-family: Lato;
        font-size: 30px;
        font-weight: 400;
        line-height: 64px;
        letter-spacing: 0em;
        text-align: center;
        color: #fff;
    }
`
