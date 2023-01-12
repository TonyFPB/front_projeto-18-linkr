import { BiRepost } from "react-icons/bi";
import styled from "styled-components";

export default function Share({ post_id }) {
  return (
    <Div>
      <BiRepost size={20} color="#FFFFFF" />
      <Text> re-posts</Text>
    </Div>
  );
}

const Div = styled.div``;
const Text = styled.p``;
