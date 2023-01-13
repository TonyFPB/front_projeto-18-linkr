import styled from "styled-components";
import { TfiReload } from "react-icons/tfi";

export default function UpdateBanner({ updates, timeline, setUpdates }) {
  return (
    <Banner
      onClick={() => {
        timeline();
        setUpdates(0);
      }}
    >
      <div>
        <p>{updates} new posts, load more! </p>
        <TfiReload color={"#ffffff"}/>
      </div>
    </Banner>
  );
}

const Banner = styled.div`
  height: 61px;
  width: 611px;
  border-radius: 16px;
  background-color: #1877f2;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  
  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  p {
    font-family: Lato;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;

    display: block;
  }
`;
