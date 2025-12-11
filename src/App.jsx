import { useState } from 'react'
import HomePage from "./pages/home/HomePage"
import {Routes, Route } from "react-router"
import Cart from './pages/cart/cart'
import CheckOut from "./pages/checkout/CheckOut"
import ProductDetalis from './pages/productDetalis/ProductDetalis'
import Login from './pages/login/login'
// import './App.css'

function App(){
  return(
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
      <Route path='/products/:id' element={<ProductDetalis/>}/>
      <Route path='/login' element={<Login/>}/>

    </Routes>
  )
}

export default App
