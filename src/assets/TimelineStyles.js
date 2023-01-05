import styled from "styled-components";

export const StyledTimeline = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 72px;
`
export const StyledSearchTimeline = styled.div`
    display: none;
    width: 100%;
    position: relative;
    margin: 10px 0 0 0;
    padding: 0 15px;
    z-index: 1;
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
    @media (max-width: 896px) {
        display: flex;
    }
`