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
    @media (max-width: 414px) {
        flex-direction: column;
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
    @media (max-width: 414px) {
        width: 100%;
        height: 175px;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h1{
           font-size: 76px; 
        }
        p{
            font-size:23px ;
        }
    }   
`

export const RightSide = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 414px) {
        width: 100%;
    }
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
    @media (max-width: 414px) {
        margin: 40px 0 0 0;
        input{
            height: 55px;
            font-size: 22px;
            ::placeholder{
                font-size: 22px;
            }
        }
        button{
            height: 55px;
            font-size: 22px;
        }
    }
`
export const PopUp = styled.h1`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    color: #FFFFFF;
`