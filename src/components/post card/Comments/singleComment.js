import styled from "styled-components"

export default function SingleComment({ comment }) {
    const { isFollowing, isOwner, isYou, ownerComment, ownerImage, text } = comment
    return (
        <StyledComment>
            <Left><img src={ownerImage} /></Left>
            <Right>
                <Top>
                    <Name>{ownerComment}</Name>
                    {isFollowing || isOwner || isYou
                        ?
                        <Infos>{isOwner && "Post's Author"} {isFollowing && "Following"} {isYou && "You"}</Infos>
                        :
                        ''
                    }
                </Top>
                <Bottom>
                    {text}
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
    margin: 0 0 0 25px;
    list-style: disc;
    
`

const Bottom = styled.div`
    width: 500px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #ACACAC;
    word-wrap: break-word;
`