import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NewPostCard from "../components/newPost.js";
import PostCard from "../components/postCard.js";

function getheader() {
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  return header;
}

export default function TimelineUser({ user, setUserSelected }) {
  const [data, setData] = useState(undefined);
  const [erro, setErro] = useState(undefined);

  function getheader() {
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return header;
  }

  const header = getheader();
  let id = 0;

  if (Object.keys(user).length !== 0) {
    id = user.user.id;
  }

  function feedUser() {
    const config = { headers: header };
    const url = `${process.env.REACT_APP_URL_API}/user/${id}`;
    const promisse = axios.get(url, config);
    promisse.then((res) => setData(res.data));
    promisse.catch((erro) => setErro(erro.response.data));
  }

  useEffect(feedUser, [id]);

  return (
    <Feed>
      <Title>
        <img src={user.user.image} alt="" />
        {`${user.user.name}'s posts`}
      </Title>
      <NewPostCard timeline={feedUser} />
      <Container>
        {data ? (
          data.length === 0 ? (
            <Message>
              <p>There are no posts yet</p>
            </Message>
          ) : (
            data.posts.map((data) => {
              if (data.id)
                return (
                  <PostCard
                    data={data}
                    key={data.id}
                    user={user.user}
                    setUserSelected={setUserSelected}
                    timeline={feedUser}
                  />
                );
            })
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
`;

const Title = styled.p`
  font-family: Oswald;
  font-size: 43px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: left;
  color: #fff;

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
