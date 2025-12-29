import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductTab from './ProductTab.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h2 style={
      {
        display : "flex",
        justifyContent : "center",
      }
    }>
    Product Detail | Shop Now
    </h2>
    <ProductTab />
  </StrictMode>,
)
