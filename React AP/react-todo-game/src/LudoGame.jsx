import React, { useState } from "react";
import "./LudoGame.css";

function LudoGame() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let UpdateBlue = () => {
    setMoves((currValue) => {
      return { ...currValue, blue: currValue.blue + 1 };
    });
  };
  let UpdateYellow = () => {
    setMoves((currValue) => {
      return { ...currValue, yellow: currValue.yellow + 1 };
    });
  };
  let UpdateGreen = () => {
    setMoves((currValue) => {
      return { ...currValue, green: currValue.green + 1 };
    });
  };
  let UpdateRed = () => {
    setMoves((currValue) => {
      return { ...currValue, red: currValue.red + 1 };
    });
  };

  return (
    <>
      <br />
      <div className="LudoGame">
        <p>Blue Moves : {moves.blue}</p>
        <button className="Blue" onClick={UpdateBlue}>
          +1
        </button>
        <p>Yellow Moves : {moves.yellow}</p>
        <button className="Yellow" onClick={UpdateYellow}>
          +1
        </button>
        <p>Green Moves : {moves.green}</p>
        <button className="Green" onClick={UpdateGreen}>
          +1
        </button>
        <p>Red Moves : {moves.red} </p>
        <button className="Red" onClick={UpdateRed}>
          +1
        </button>
      </div>
      <br />
    </>
  );
}

export default LudoGame;
