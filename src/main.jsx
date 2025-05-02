import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Home } from './Home.jsx'
import { Cart } from './Cart.jsx'
import { Register } from './Register.jsx'
import { Login } from './Login.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import { Products } from './Products.jsx'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product' element={<Products/>}/>
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>,
)
