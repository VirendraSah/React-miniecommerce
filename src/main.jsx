import { createRoot } from 'react-dom/client'
import '../src/css/index.css'
import { Home } from './Pages/Home.jsx'
import { Cart } from './Pages/Cart.jsx'
import { Register } from './Pages/Register.jsx'
import { Login } from './Pages/Login.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Product from './Pages/Product.jsx'
import {MainContext} from './MainContext.jsx'

createRoot(document.getElementById('root')).render(
  <MainContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </MainContext>
)
