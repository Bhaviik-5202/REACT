import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greet from './Greet.jsx';
import Demo from './Componets/Demo.jsx'
import Props from './Componets/Props.jsx'
import Gallery from './Componets/Gallery.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greet />
    <Demo />
    <Props />
    <Gallery />
  </StrictMode>,  
)
