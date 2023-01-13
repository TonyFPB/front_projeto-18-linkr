import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NewPostCard from "./newPost.js";
import PostCard from "./post card/postCard";
import useInterval from "use-interval";
import UpdateBanner from "./updateBanner.js";
import InfiniteScroll from "react-infinite-scroller";

function getheader() {
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  return header;
}

export default function FeedContainer({ setUserSelected, userImage}) {
  const [data, setData] = useState(undefined);
  const [erro, setErro] = useState(undefined);
  const [last, setLast] = useState(undefined);
  const [updates, setUpdates] = useState(undefined);
  const [page, setPage] = useState(0);
  const [more, setMore] = useState(true);

  function timeline(num) {
    const header = getheader();
    const config = { headers: header };
    let url = "";

    url = `${process.env.REACT_APP_URL_API}/more/${num}`;
    const promisse = axios.get(url, config);
    promisse.then((res) => {
      if (res.data.posts.length < 10)  setMore(false)
      setPage(num + 1);
      setData(res.data.posts);
      setLast(res.data.last_update);
    });
    promisse.catch((erro) => setErro(erro.response.data));
  }

  useEffect(() => timeline(0), []);

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
            timeline
        </Title>
        <NewPostCard
          userImage={userImage}
          timeline={timeline}
          setUpdates={setUpdates}
        />
      {updates ? <UpdateBanner updates={updates} timeline={timeline} /> : <></>}
      <Container>
        {data ? (
          data.length === 0 ? (
            <Message>
              <p>There are no posts yet</p>
            </Message>
          ) : (
            <InfiniteScroll
              pageStart={page}
              loadMore={() => timeline(page)}
              hasMore={more}
              threshold={270}
              loader={
                <Message>
                  <p>Loading...</p>
                </Message>
              }
            >
              <Container>
                {data.map((data) => (
                  <PostCard
                    data={data}
                    key={data.id}
                    timeline={timeline}
                    user={userImage === null ? {} : userImage}
                    setUserSelected={setUserSelected}
                  />
                ))}
              </Container>
            </InfiniteScroll>
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
