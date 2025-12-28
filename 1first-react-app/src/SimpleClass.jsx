import "./SimpleClass.css";
import React from "react";
class SimpleClass extends React.Component {
  render() {
    return (
      <>
        <div className="Simple">
          <br />
          <h1
            style={{
              color: "white",
              backgroundColor: "black",
              fontSize: "50px",
            }}
          >
            Wel Come To React.js
          </h1>
        </div>
      </>
    );
  }
}

export default SimpleClass;
