import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter } from "react-router"
import CartProvider from "./context/CartContext"
import { ToastContainer } from 'react-toastify'
import { ProductProvider } from './context/productContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ProductProvider>
    <CartProvider>
    <App />
    <ToastContainer position="top-right" autoClose={3000} />
    </CartProvider>
    </ProductProvider>
    </BrowserRouter>
   
  </StrictMode>
)
