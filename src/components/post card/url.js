import styled from "styled-components";

export default function UrlContainer({metadata, url}) {
  return (
    <Url href={url} target="_blank" rel="noopener noreferrer">
      <div>
        <UrlTitle>{metadata.title}</UrlTitle>
        <UrlContent>{metadata.description}</UrlContent>
        <UrlFotmat>{url}</UrlFotmat>
      </div>
      <UrlImg src={metadata.image} alt="url image" />
    </Url>
  );
}



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
  max-width: 300px;
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
  max-width: 300px;
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
  max-width: 300px;
`;
const UrlImg = styled.img`
  max-height: 155px;
  max-width: 153.44039916992188px;
`;
