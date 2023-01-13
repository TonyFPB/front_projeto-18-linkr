import styled from "styled-components";
import UrlContainer from "./url";
import NameAndMessage from "./nameAndMessage";
import Like from "./like";
import { BiRepost } from "react-icons/bi";
import Repost from "./repost";
import { useState } from "react";
import BallonComment from "./Comments/ballonComment";
import  Comments  from "./Comments/comments";

export default function PostCard({ data, timeline, user, setUserSelected }) {
  const { repost, repost_name, post_id, image, url, metadata } = data;
  const [visibleComments, setVisibleComments] = useState(false);
  const [isCommentSend, setIsCommentSend] = useState(false);
  
  return (
    <BoxCard>
      {repost ? (
        <BorderCard>
          <div className="head">
            <BiRepost size={30} color="#FFFFFF" />
            <p className="p">
              Re-posted by <strong>{repost_name}</strong>
            </p>
          </div>
          <Card>
            <Left>
              <Img src={image} alt="user icon" />
              <div>
                <Like id={post_id} />
                <BallonComment
                  visibleComments={visibleComments}
                  isCommentSend={isCommentSend}
                  setVisibleComments={setVisibleComments}
                  post_id={post_id}
                />
                <Repost post_id={post_id} />
              </div>
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
        </BorderCard>
      ) : (
        <Card>
          <Left>
            <Img src={image} alt="user icon" />
            <div>
              <Like id={post_id} />
              <BallonComment
                visibleComments={visibleComments}
                isCommentSend={isCommentSend}
                setVisibleComments={setVisibleComments}
                post_id={post_id}
              />
              <Repost post_id={post_id} />
            </div>
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
      )}
      {visibleComments && (
        <Comments
          isCommentSend={isCommentSend}
          setIsCommentSend={setIsCommentSend}
          post_id={post_id}
        />
      )}
    </BoxCard>
  );
}

const BoxCard = styled.div`
  width: 611px;
  border-radius: 16px;
  background-color: #1e1e1e;
`;

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

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 5px;
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
const BorderCard = styled.div`
  width: 611px;
  height: 310px;
  border-radius: 16px;
  background-color: #1e1e1e;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .head {
    height: 33px;
    width: 100%;

    display: flex;
    align-items: center;
    gap: 6px;

    padding-left: 13px;
  }

  .p {
    font-family: Lato;
    font-size: 11px;
    font-weight: 400;
    line-height: 13px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
  strong {
    font-weight: 700;
  }
`;
