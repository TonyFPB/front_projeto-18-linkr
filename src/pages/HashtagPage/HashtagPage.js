import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Header from "../../components/Header"
import PostCard from "../../components/postCard"
import Trending from "../../components/Trending/Trending"

export default function HashtagPage(){
    const [data, setData] = useState([])
    const {hashtag} = useParams()
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjczMjA0MzQ3LCJleHAiOjE2NzMyOTA3NDd9.DhUy2ru3Y9EkXWy03TvOsGTYpO3C75LwB2Q6okBaERg"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    function getPosts(){
        axios.get(`http://localhost:5000/post/${hashtag}`,config)
        .then(res => setData(res.data))
        .catch(err => console.log(err.response.data))
    }

    useEffect(()=>{
        getPosts()
    }, [hashtag])
    return (
        <>
        <Header></Header>
        <PageContainer>
            <Feed>
                <Title>{`#  ${hashtag}`}</Title>
                <Container>
                    {data.map(post=> <PostCard data={post} key={post.id}></PostCard>)}
                </Container>
            </Feed>
            <Trending></Trending>
        </PageContainer>
        </>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: flex;
    justify-content: center;
    margin-top: 130px;
`

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