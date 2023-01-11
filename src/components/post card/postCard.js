import styled from "styled-components";
import UrlContainer from "./url";
import NameAndMessage from "./nameAndMessage";

export default function PostCard({ data, timeline, user, setUserSelected }) {
  const { image, url, metadata } = data;

  return (
    <Card>
      <Img src={image} alt="user icon" />
      <div className="div">
        <NameAndMessage data={data} timeline={timeline} setUserSelected={setUserSelected}/>
        <UrlContainer metadata={metadata} url={url}/>
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

  margin-top: 18px;
  margin-left: 18px;
`;


