import React, { useState, useEffect } from 'react';
const FunctionComponent = (props) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Hello from Function Component!");

  useEffect(() => {
    console.log("Component mounted or updated!");
    
    return () => {
      console.log("Component will unmount!");
    };
  }, [count]);

  // Event handlers
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const changeMessage = () => {
    setMessage("Message changed After Click successfully!");
  };

  return (
    <div style={{ padding: '20px', border: '2px solid green', margin: '10px' }}>
      <h2>Function Component Example</h2>
      <p>{message}</p>
      <p>Count: {count}</p>
      
      <button onClick={handleIncrement} style={{ margin: '5px' }}>
        Increment
      </button>
      <button onClick={handleDecrement} style={{ margin: '5px' }}>
        Decrement
      </button>
      <button onClick={changeMessage} style={{ margin: '5px' }}>
        Change Message
      </button>
      
    </div>
  );
};


export default FunctionComponent;