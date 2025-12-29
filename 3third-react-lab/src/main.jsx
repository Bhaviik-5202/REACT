import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DemoMap from './Demo/P1-MAP.jsx'
import DemoArray from './Demo/DemoArray.jsx'
import Student from './Compontes/Student.jsx'
import Product from './Compontes/Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <DemoMap />
    <DemoArray />
    <Student />
    <Product />
  </StrictMode>,
)
