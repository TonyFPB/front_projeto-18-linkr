import styled from "styled-components"

export default function SingleComment() {
    return (
        <StyledComment>
            <Left><img src="https://img.freepik.com/fotos-gratis/o-gato-vermelho-ou-branco-eu-no-estudio-branco_155003-13189.jpg?w=2000" /></Left>
            <Right>
                <Top>
                    <Name>João Avatares</Name>
                    <Infos>following post's author</Infos>
                </Top>
                <Bottom>
                    Adorei esse post, ajuda muito a usar Material UI com React!
                </Bottom>
            </Right>
        </StyledComment>
    )
}

const StyledComment = styled.li`
    display: flex;

    padding: 13px 0 16px 0;
    border-bottom: 1px solid #353535;
    transform: rotate(-0.1deg);
`

const Left = styled.div`
    img{
        width: 39px;
        height: 39px;
        border-radius: 304px;
    }
`

const Right = styled.div`
    margin: 0 0 0 18px;
`

const Top = styled.div`
    display: flex;
`

const Name = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    color: #F3F3F3;
`

const Infos = styled.li`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #565656;
    margin: 0 0 0 20px;

    list-style: disc;
    ::marker{
        
    }
`

const Bottom = styled.div`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #ACACAC;
`