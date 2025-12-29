// Hooks
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DemoHooks from './DemoHooks.jsx'
import Hooks from './Componet/Count.jsx'
import Hide from './Componet/Hide.jsx'
import Timer from './Componet/Timer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DemoHooks /><hr />
    <Hooks /><hr />
    <Hide /><hr />
    <Timer />
  </StrictMode>,
);
