import React, { useState } from 'react'

function Count() {
    const [count, setCount] = useState(0);
    let Increase = () => {
        setCount(count+1);
    }
    let Decreae = () => {
        setCount(count-1);
    }
    let Reset = () => {
        setCount(0);
    }
  return (
    <>
    <div style={
        {
            backgroundColor : "yellow",
            color : "black"
        }
    }>
        <br />  
        <button onClick={Increase}>Increae Count</button>
        <br /><br />
        <button onClick={Decreae}>Decreae Count</button>
        <br /><br />
        <button onClick={Reset}>Reset Count</button>
        <br /><br />
        <h1>Count : {count}</h1>

    </div>
    </>
  )
}

export default Count;
