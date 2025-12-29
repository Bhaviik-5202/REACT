import React, { useState } from "react";

function LikeButton() {
  const [isLike, setIsLiked] = useState(false);
  const [count, setCount] = useState(0);
  let isLikedBtn = () => {
    setIsLiked(!isLike);
    setCount(count+1);
  };
  let LikeStyle = {
    color : "red"
  }
  return (
    <>
        <h3>Count = {count}</h3>
      <h1 onClick={isLikedBtn}>
        {isLike ? (
          <i className="fa-solid fa-heart" style={LikeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart"></i>
        )}
      </h1>
    </>
  );
}

export default LikeButton;
