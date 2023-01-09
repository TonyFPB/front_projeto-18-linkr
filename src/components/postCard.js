import styled from "styled-components";
import axios from "axios";

// export default function PostCard ({data}) {
export default function PostCard({ data, setUserSelected }) {
  //const {id, owner, image, name, message, url, metadata} = data
  const { id, post_user_id, owner, image, name, message, url, metadata } = data;

  // console.log('post_user_id =', post_user_id)

  function getheader() {
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return header;
  }

  async function searchPeopleByid(idUser) {
    const header = getheader();

    try {
      const url = `${process.env.REACT_APP_URL_API}/user/${idUser}`;
      await axios.get(url, { headers: header }).then((response) => {
        setUserSelected(response.data);
      });
    } catch (error) {}
  }

  return (
    <Card>
      {/* <Img src={user.image} alt="user icon"/> */}
      <Img src={image} alt="user icon" />
      <div className="div">
        {/* <Name>{name}</Name> */}
        <Name onClick={() => searchPeopleByid(post_user_id)}>{name}</Name>
        <Message>{message}</Message>
        <Url href={url} target="_blank" rel="noopener noreferrer">
          <div>
            <UrlTitle>{metadata.title}</UrlTitle>
            <UrlContent>{metadata.description}</UrlContent>
            <UrlFotmat>{url}</UrlFotmat>
          </div>
          <UrlImg src={metadata.image} alt="url image" />
        </Url>
      </div>
    </Card>
  );
}

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
`;
const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;

  margin-top: 18px;
  margin-left: 18px;
`;
const Name = styled.p`
  font-family: Lato;
  font-size: 19px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  color: #ffffff;
`;
const Message = styled.p`
  font-family: Lato;
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  color: #b7b7b7;

  display: block;
  height: 52px;
  width: 502px;
  margin: 7px 0;
`;
const Url = styled.a`
  height: 155px;
  width: 503px;
  border-radius: 11px;
  border: 1px solid #4d4d4d;

  display: flex;
  justify-content: space-between;

  overflow: hidden;

  cursor: pointer;

  text-decoration: none;

  div {
    display: flex;
    flex-direction: column;
    gap: 7px;

    padding: 20px;
  }
`;
const UrlTitle = styled.p`
  font-family: Lato;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #cecece;

  display: block;
  width: 300px;
`;
const UrlContent = styled.p`
  font-family: Lato;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #9b9595;

  display: block;
  width: 300px;
`;
const UrlFotmat = styled.p`
  font-family: Lato;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0em;
  text-align: left;
  color: #cecece;

  display: block;
  width: 300px;
`;
const UrlImg = styled.img`
  height: 155px;
  width: 153.44039916992188px;
`;
