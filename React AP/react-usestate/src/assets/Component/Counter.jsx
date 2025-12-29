import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  let CounterUpdate = () => {
    setCount(count + 2);
  };
  return (
    <>
      <h3>Count = {count}</h3>
      <button onClick={CounterUpdate}>Increase Count</button>
    </>
  );
}

export default Counter;
