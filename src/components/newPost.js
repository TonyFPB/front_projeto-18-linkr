import { useState } from "react"
import styled from "styled-components"

export default function NewPostCard () {
    const [loading, setLoading] = useState(false)
    const [post, setPost] = useState({
        url: "",
        message: ""
    })

    const [erro, setErro] = useState({
        placeholder1: "http://..." ,
        placeholder2: "Awesome article about #JavaScript",
        border: "none"
    })

    function postar (event) {
        event.preventDefault()

        if (post.url === "") return setErro({
            placeholder1: "Insert a valid url",
            placeholder2: "",
            border: "solid 2px rgba(255,0,0, 0.4)" 
        })

        setLoading(true)
    }

    return (
        <Card>
            <Img src="https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg" alt="user icon"/>
            <div>
                <Text>What are you going to share today?</Text>
                <Forms onSubmit={postar}>

                    <Input placeholder={erro.placeholder1} border={erro.border}
                    type="url" value={post.url} disabled={loading}
                    onChange={(e) => {setPost({...post, url: e.target.value}); setErro(false)}}/>

                    <Textarea placeholder={erro.placeholder2} border={erro.border}
                    type="text" value={post.message} disabled={loading}
                    onChange={(e) => setPost({...post, message: e.target.value})}/>

                    <div><Button disabled={loading}>
                        {loading ? "Publishing..." : "Publish"}
                    </Button></div>

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

    display: flex;
    
    div {
        margin-left: 18px;
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
    width: 503px;

    div {
        display: flex;
        justify-content: flex-end;
    }
`
const Input = styled.input`
    height: 30px;
    width: 100%;
    border-radius: 5px;
    background-color: #EFEFEF;
    border: ${porps => porps.border};

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
    height: 66px;
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

    cursor: ${props => props.disabled ? "hover" : "pointer"};
`