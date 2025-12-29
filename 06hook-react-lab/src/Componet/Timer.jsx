import React, { useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);

    setTimeout(() => {
        setTimer(timer + 1);
    }, 10);

    let Stop = () => {
      setTimer(0);
    }
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          color: "black",
          border : "1px solid red"
        }}
      >
        <h1>Timer : {timer}</h1>
        <button onClick={Stop}>Stop Time</button>
      </div>
    </>
  );
}

export default Timer;
