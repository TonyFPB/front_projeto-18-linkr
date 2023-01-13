import { BsFillHeartFill } from "react-icons/bs";
import { BsHeart } from "react-icons/bs";
import { useState, useEffect } from "react";
// import  {TooltipWrapper} from "react-TooltipWrapper";
import axios from "axios";
import styled from "styled-components";

function getheader() {
    const header = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    return header;
  }

export default function Like ({ post_id }) {
  const [like, setLike] = useState(false);

  const header = getheader();
  const config = { headers: header };

  function getAllLikes() {
    axios
      .get(`${process.env.REACT_APP_URL_API}/likes/${post_id}`, config)
      .then((res) => {
        // TooltipWrapper.rebuild();
        console.log(res.data);
      })
      // .catch(erro => console.log(erro.response.data))
  }

  // useEffect(() => getAllLikes(), []);

  function likeAndDislikePost() {
    if (!like) {
      axios
        .post(
          `${process.env.REACT_APP_URL_API}/likes/}${post_id}`,
          { post_id: post_id },
          config
        )
        .then(() => getAllLikes())
        .catch(() => "Ação indisponível, por favor tente novamente!");
    } else {
        axios
        .delete(`${process.env.REACT_APP_URL_API}/likes/}${post_id}`, config)
        .then(() => getAllLikes())
        .catch(() => "Ação indisponível, por favor tente novamente!");
    }

  }

  return (
    <>
      {like ? (
        <BsFillHeartFill onClick={likeAndDislikePost} 
        color="#AC0000"
        size={20}
        />
      ) : (
        <BsHeart onClick={likeAndDislikePost} 
        color="#FFFFFF"
        size={20}
        />
      )}
    </>
  );
}
