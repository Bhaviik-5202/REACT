import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoList from './TodoList.jsx'
import TodoGame from './TodoGame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <TodoList /> */}
    <TodoGame />
  </StrictMode>,
)
