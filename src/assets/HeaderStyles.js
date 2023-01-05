import styled from "styled-components";

export const StyledHeader = styled.div`
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 72px;
    background-color: #151515;
    padding: 0 28px 0 17px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    p{
        font-family: 'Passion One';
        font-style: normal;
        font-weight: 700;
        font-size: 49px;
    }
    @media (max-width: 600px) {
        p{
            font-size: 45px;
        }
    }
`

export const StyledSearch = styled.div`
    display: flex;
    width: 40%;
    position: relative;
    svg{
        position: absolute;
        top: 8px;
        right: 17px;
        color: #C6C6C6;
        font-size: 30px;
        :hover{
            cursor: pointer;
        }
    }
    input{
        width: 100%;
        height: 45px;
        border-radius: 8px;
        padding: 0 0 0 17px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        ::placeholder{
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 19px;
            color: #C6C6C6;
        }
    }
    @media (max-width: 896px){
        display: none;
    }
`

export const StyledImageDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    
    svg{
        color:#FFFFFF;
        font-size: 35px;
        :hover{
            cursor: pointer;
        }
    }
    img{
        width: 56px;
        height: 56px;
        border-radius:26px ;
        margin: 0 0 0 16px;
        :hover{
            cursor: pointer;
        }
    }
    @media (max-width: 896px){
        img{
            width: 41px;
            height: 41px;
            margin: 0 0 0 8px;
        }
        svg{
            font-size: 30px;
        }
    }
`
export const Overlay = styled.div`
    position: fixed;
    background-color: rgba(0,0,0,0.2);
    z-index: 1;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    div{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 47px;
        border-radius:0 0 0 20px;
        background-color: #171717;
        position: fixed;
        top:72px;
        right: 0px;

        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        color: #FFFFFF;
        :hover{
            cursor: pointer;
        }
    }
` 