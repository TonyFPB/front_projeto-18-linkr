import styled from "styled-components";

export const SignStyled = styled.div`
    height: 100vh;
    display: flex;
    color: #FFFFFF;
    a{
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #FFFFFF;
    }   
`

export const LeftSide = styled.div`
    padding: 301px  0 0 144px;
    background-color: #151515;
    width: 70%;
    h1{
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 106px;
    }
    p{
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
    }
`

export const RightSide = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const FormsSign = styled.form`
    display: flex;
    width: 80%;
    flex-direction: column;
    
    input{
        width: 100%;
        height: 65px;
        border-radius: 6px;
        margin: 0 0 14px 0;
        
        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        padding: 0 0 0 10px;
        ::placeholder{
            color: #9F9F9F;
            font-family: 'Oswald';
            font-style: normal;
            font-weight: 700;
            font-size: 27px;
        }
    }
    
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 65px;
        background-color: #1877F2;
        border-style: none;
        border-radius: 6px;
        margin: 0 0 14px 0;

        font-family: 'Oswald';
        font-style: normal;
        font-weight: 700;
        font-size: 27px;
        color: #FFFFFF;
    }
`
export const PopUp = styled.h1`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    color: #FFFFFF;
`