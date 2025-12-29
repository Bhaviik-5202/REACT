import React, { useState } from 'react'

function DemoHooks() {
    const [count, setCount] = useState(0);
    let Demo = () => {
        setCount(count+1);
    }
  return (
    <>
    <div style={
        {
            backgroundColor : "white",
            color : "black"
        }
    }>
        <h1>Demo Hook</h1>
        <button onClick={Demo}>Count</button>
        <h3>Count  : {count}</h3>
    </div>
    <br />
    </>
  )
}

export default DemoHooks
