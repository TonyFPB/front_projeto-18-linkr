import axios from "axios"
import { config } from "localforage"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import PostCard from "../../components/postCard"

export default function HashtagPage(){
    const [data, setData] = useState([])
    const {hashtag} = useParams()
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjczMTExODEzLCJleHAiOjE2NzMxOTgyMTN9.0iVlgN87Gn85t_1aVOvAiuS12ZIOHZZv2pPzZCmYXrw"
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    console.log(data)

    // const data = {id: 42,
    // owner: false,
    // image: "https://conteudo.imguol.com.br/blogs/174/files/2018/05/iStock-648229868-1024x909.jpg",
    // name: "Lucas",
    // message: "ola tudo bem #java",
    // url: "https://www.youtube.com/watch?v=OkJ0tmNblZo",
    // metadata: {
    //   title: "Criolo - Samba em 3 Tempos",
    //   description: "Gravado no Teatro Unimed em maio de 202100:00 Tempo 01 - Sofrência16:42 Tempo 02 - Luta37:25 Tempo 03 - AlegriaCRIOLO, SAMBA EM 3 TEMPOSVoz: CRIOLOCavacos: R...",
    //   image: "https://i.ytimg.com/vi/OkJ0tmNblZo/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgTyhJMA8=&rs=AOn4CLDylEo0m76sZYaTh5xPKOfvJurhRw"}}

    function getPosts(){
        axios.get(`http://localhost:5000/hashtag/${hashtag}`,config)
        .then(res => setData(res.data))
        .catch(err => console.log(err.response.data))
    }

    useEffect(()=>{
        getPosts()
    }, [])
    return (
        <>
            {data.map(post=> <PostCard data={post}></PostCard>)}
        </>
    )
}