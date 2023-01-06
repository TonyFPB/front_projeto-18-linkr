import styled from "styled-components"

export default function PostCard () {
    return (
        <Card>
            <Img src="https://www.petz.com.br/blog/wp-content/uploads/2021/11/enxoval-para-gato-Copia.jpg" alt="user icon"/>
            <div className="div">
                <Name>Gatinho programador</Name>
                <Message>Muito maneiro esse tutorial de Material UI com React, deem uma olhada!</Message>
                <Url href="https://medium.com/@pshrmn/a-simple-react-router" target="_blank" rel="noopener noreferrer">
                    <div>
                        <UrlTitle>Como aplicar o Material UI em um projeto React</UrlTitle>
                        <UrlContent>Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page.</UrlContent>
                        <UrlFotmat>https://medium.com/@pshrmn/a-simple-react-router</UrlFotmat>
                    </div>
                    <UrlImg src="https://pixlr.com/images/index/remove-bg.webp" alt="url image"/>
                </Url>
            </div>
        </Card>
    )
}

const Card = styled.div`
    height: 276px;
    width: 611px;
    border-radius: 16px;
    background-color: #171717;
    box-sizing: border-box;

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
const Name = styled.p`
    font-family: Lato;
    font-size: 19px;
    font-weight: 400;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
    color: #FFFFFF;
`
const Message = styled.p`
    font-family: Lato;
    font-size: 17px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #B7B7B7;

    display: block;
    height: 52px;
    width: 502px;
    margin: 7px 0;
`
const Url = styled.a`
    height: 155px;
    width: 503px;
    border-radius: 11px;
    border: 1px solid #4D4D4D;

    display: flex;
    justify-content: space-between;

    overflow: hidden;

    cursor: pointer;

    text-decoration: none;

    div {
        display: flex;
        flex-direction: column;
        gap: 7px;

        padding: 20px;
    }
`
const UrlTitle = styled.p`
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #CECECE;

    display: block;
    width: 300px;
`
const UrlContent = styled.p`
    font-family: Lato;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
    color:#9B9595;

    display: block;
    width: 300px;
`
const UrlFotmat = styled.p`
    font-family: Lato;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
    color:#CECECE;

    display: block;
    width: 300px;
`
const UrlImg = styled.img`
    height: 155px;
    width: 153.44039916992188px;
`