import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LudoGame from './LudoGame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <LudoGame />
  </StrictMode>,
)
