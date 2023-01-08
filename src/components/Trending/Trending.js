import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Trendings from "./HahstagTrendings"

export default function Trending(){
    const [hashtags,setHashtags] = useState([])
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjczMjA0MzQ3LCJleHAiOjE2NzMyOTA3NDd9.DhUy2ru3Y9EkXWy03TvOsGTYpO3C75LwB2Q6okBaERg"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    function getTrendingHashtags(){
        axios
            .get("http://localhost:5000/trending",config)
            .then((res)=> setHashtags(res.data))
            .catch((res) => console.log(res.response.data))
    }
    useEffect(()=>{
        getTrendingHashtags()
    },[])
    return(
        <TrendingContainer>
            <h1>trending</h1>
            <hr></hr>
            {hashtags.map((hashtag,i)=> <Trendings hashtag={hashtag.name} key={i}></Trendings>)}
        </TrendingContainer>
    )
}

const TrendingContainer = styled.div`
    height: 406px;
    width: 301px;
    background-color: #171717;
    border-radius: 16px;
    padding: 16px;
    margin-left: 1.4vw;
    margin-top: 94px;
    h1{
        font-family: 'Oswald';
        color: #fff;
        font-size: 27px;
        font-weight: 700;
    }
    hr{
        margin-top: 17.5px;
        margin-bottom: 23px;
    }
`