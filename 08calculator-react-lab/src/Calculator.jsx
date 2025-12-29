import { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [input, setInput] = useState("");

  let handleClick = (value) => {
    if (value === "=") {
      try {
        let expression = input
          .replace(/sin/g, "Math.sin")
          .replace(/cos/g, "Math.cos")
          .replace(/tan/g, "Math.tan")
          .replace(/pi/g, "Math.PI")
          .replace(/exp/g, "Math.exp")
          .replace(/pow/g, "Math.pow");

        setInput(eval(expression).toString());
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "AC") {
      setInput("");
    } else if (value === "->") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calc-container">
      <h1 className="calc-title">React Calculator</h1>

      <div className="calc-box">
        <input type="text" className="calc-display" value={input} readOnly />

        <div className="calc-buttons">
          <button onClick={() => handleClick("/")}>/</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("AC")}>AC</button>

          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("+")}>+</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("->")}>⌫</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick(".")}>.</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick("00")}>00</button>
          <button className="equal-btn" onClick={() => handleClick("=")}>
            =
          </button>

          <button onClick={() => handleClick("sin(")}>sin</button>
          <button onClick={() => handleClick("cos(")}>cos</button>
          <button onClick={() => handleClick("tan(")}>tan</button>
          <button onClick={() => handleClick("pow(")}>pow</button>

          <button onClick={() => handleClick("exp(")}>exp</button>
          <button onClick={() => handleClick("pi")}>π</button>
          <button onClick={() => handleClick(")")}> ) </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
