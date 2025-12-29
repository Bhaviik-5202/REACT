import React, { useState } from "react";
function randomNum() {
    return Math.random();
}
function Random() {
  const [count, setCount] = useState(randomNum);

  let genrate = () => {
    setCount(count+1);
  };
  return (
  <>    
    <h3>Count = {count}</h3>
    <button onClick={genrate}>Increase Count</button>
  </>);
;
}

export default Random;
