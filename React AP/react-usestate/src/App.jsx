import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let incCount = () => {
    setCount(count+1);
  }

  return (
    <>
        <h1>Count = {count}</h1>
        <button onClick={incCount}>Increase Count</button>
    </>
  )
}

export default App
