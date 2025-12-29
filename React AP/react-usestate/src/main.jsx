import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LikeButton from './assets/Component/LikeButton.jsx'
import Counter from './assets/Component/Counter.jsx'
import CallbackUpdate from './assets/Component/CallbackUpdate.jsx'
import Random from './assets/Component/Random.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <hr /><br />
    <hr /><br />
    <LikeButton />
    <hr /><br />
    <hr /><br />
    <Counter />
    <hr /><br />
    <hr /><br />
    <CallbackUpdate />
    <hr /><br />
    <hr /><br />
    <Random />
    <hr /><br />
    <hr /><br />
  </StrictMode>,
)
