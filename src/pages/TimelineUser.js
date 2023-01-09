import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NewPostCard from "../components/newPost.js";
import PostCard from "../components/postCard.js";

export default function TimelineUser({ user }) {
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

  const id = user.user.id;

  useEffect(() => {
    const config = { headers: header };

    const url = `${process.env.REACT_APP_URL_API}/user/${id}`;
    // const url = `${process.env.REACT_APP_URL_API}/post`;
    const promisse = axios.get(url, config);

    promisse.then((res) => setData(res.data));
    promisse.catch((erro) => setErro(erro.response.data));
  }, [id]);

  return (
    <Feed>
      <Title>
        <img src={user.user.image} alt="" />
        {`${user.user.name}'s posts`}
      </Title>
      <NewPostCard />
      <Container>
        {data
          ? data.length === 0
            ? "There are no posts yet"
            : // : data.posts.map((data) =>  <PostCard data={data} key={data.id} user={user.user} />)
              data.posts.map((data) => {
                if (data.id)
                  return (
                    <PostCard data={data} key={data.id} user={user.user} />
                  );
              })
          : erro
          ? "An error occured while trying to fetch the posts, please refresh the page"
          : "Loading..."}
      </Container>
    </Feed>
  );
}
const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
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
  gap: 20px;
`;
