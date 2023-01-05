import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Trendings from "./HahstagTrendings"

export default function Trending(){
    const [hashtags,setHashtags] = useState([])
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjcyOTQxODM0LCJleHAiOjE2NzMwMjgyMzR9.OoIG7O9oUbk0__Y_-bZpoFKXMZmEEKjEtCcyZR54SuI"
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
    height: 40vh;
    width: 31vh;
    background-color: #171717;
    border-radius: 16px;
    padding: 16px;
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