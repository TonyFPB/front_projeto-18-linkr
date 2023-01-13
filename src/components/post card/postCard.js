import styled from "styled-components";
import UrlContainer from "./url";
import NameAndMessage from "./nameAndMessage";
import Like from "./like";
import Comments from "./Comments/comments";
import BallonComment from "./Comments/ballonComment";
import { useState } from "react";

export default function PostCard({ data, timeline, user, setUserSelected }) {
  const { post_id, image, url, metadata } = data;
  const [visibleComments, setVisibleComments] = useState(false)
  const [isCommentSend, setIsCommentSend] = useState(false)
  return (
    <BoxCard>
      <Card>
        <Left>
          <Img src={image} alt="user icon" />
          <div>
            <Like id={post_id} />
          </div>
          <BallonComment visibleComments={visibleComments} isCommentSend={isCommentSend} setVisibleComments={setVisibleComments} post_id={post_id}/>
        </Left>

        <div className="div">
          <NameAndMessage
            data={data}
            timeline={timeline}
            setUserSelected={setUserSelected}
          />
          <UrlContainer metadata={metadata} url={url} />
        </div>
        
      </Card>
      {visibleComments && <Comments isCommentSend={isCommentSend} setIsCommentSend={setIsCommentSend} post_id={post_id} />}
    </BoxCard>
  );
}

const BoxCard = styled.div`
  width: 611px;
  border-radius: 16px;
  background-color:#1E1E1E;
`

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
  .modal {
    height: 262px;
    width: 597px;
    border-radius: 50px;
  }
`;

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  padding-top: 18px;
  padding-left: 18px;
`;
