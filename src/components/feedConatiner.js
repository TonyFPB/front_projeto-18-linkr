import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NewPostCard from "./newPost.js";
import PostCard from "./post card/postCard";
import useInterval from "use-interval";
import UpdateBanner from "./updateBanner.js";

function getheader() {
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  return header;
}

export default function FeedContainer({ setUserSelected, userImage, user }) {
  const [data, setData] = useState(undefined);
  const [erro, setErro] = useState(undefined);
  const [last, setLast] = useState(undefined);
  const [updates, setUpdates] = useState(undefined);
  let id = 0;

  function timeline() {
    const header = getheader();
    const config = { headers: header };
    let url = "";

    if (id > 0) {
      url = `${process.env.REACT_APP_URL_API}/user/${id}`;
      const promisse = axios.get(url, config);
      promisse.then((res) => {
        setData(res.data.posts);
      });
      promisse.catch((erro) => setErro(erro.response.data));
    } else {
      url = `${process.env.REACT_APP_URL_API}/feed`;
      const promisse = axios.get(url, config);
      promisse.then((res) => {
        setData(res.data.posts);
        setLast(res.data.last_update);
      });
      promisse.catch((erro) => setErro(erro.response.data));
    }
  }
  // useEffect(timeline, []);
  useEffect(timeline, [id]);

  useInterval(() => {
    const header = getheader();
    const config = { headers: header };
    const url = `${process.env.REACT_APP_URL_API}/new`;

    const promisse = axios.post(url, { last_update: last }, config);
    promisse.then((res) => setUpdates(res.data.num));
    promisse.catch((erro) => console.log(erro.response.data));
  }, 15000);

  return (
    <Feed>
      <Title>
        {id > 0 ? (
          <>
            <img src={user.user.image} alt="" />
            <span>{`${user.user.name}'s posts`}</span>
          </>
        ) : (
          "timeline"
        )}
      </Title>
      {id === 0 && <NewPostCard userImage={userImage} timeline={timeline} />}
      {updates ? <UpdateBanner updates={updates} timeline={timeline} setUpdates={setUpdates}/> : <></>}
      <Container>
        {data ? (
          data.length === 0 ? (
            <Message>
              <p>There are no posts yet</p>
            </Message>
          ) : (
            data.map((data) => (
              <PostCard
                data={data}
                key={data.id}
                timeline={timeline}
                user={user === null ? {} : user.user}
                setUserSelected={setUserSelected}
              />
            ))
          )
        ) : erro ? (
          <Message>
            <p>
              An error occured while trying to fetch the posts, please refresh
              the page
            </p>
          </Message>
        ) : (
          <Message>
            <p>Loading...</p>
          </Message>
        )}
      </Container>
    </Feed>
  );
}

const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 20px;
  margin-top: 50px;
`;
const Title = styled.p`
  font-family: Oswald;
  font-size: 43px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    margin-right: 18px;
    margin-top: 10px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const Message = styled.div`
  width: 611px;
  padding-top: 50px;

  p {
    font-family: Lato;
    font-size: 30px;
    font-weight: 400;
    line-height: 64px;
    letter-spacing: 0em;
    text-align: center;
    color: #fff;
  }
`;
