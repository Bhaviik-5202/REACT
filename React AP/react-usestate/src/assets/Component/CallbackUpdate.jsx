import React, { useState } from "react";

function CallbackUpdate() {
  const [count, setCount] = useState(0);
  let incCount = () => {
    setCount((currValue) => {
      return currValue + 1;
    });
    setCount((currValue) => {
      return currValue + 1;
    });
    setCount((currValue) => {
      return currValue + 1;
    });
  };
  return (
    <>
      <h3>Count = {count}</h3>{" "}
      {/* initialization By 3 (Callback Function 1,2,3 Add..) */}
      <button onClick={incCount}>Increase Count</button>
    </>
  );
}

export default CallbackUpdate;
