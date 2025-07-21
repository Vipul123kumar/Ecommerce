import { useState } from 'react'
import React from 'react'
import './index.css'
import Navbar from './Component/Navbar/Navbar'
import Shop from './Page/Shop'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopCategory from './Page/ShopCategory'
import Product from './Page/Product'
import Cart from './Page/Cart'
import Login from './Page/Login'
import Signup from './Page/Signup'
import Footer from './Component/Footer/Footer'
import kids_banner from './Component/Assets/banner_kids.png'
import mens_banner from './Component/Assets/banner_mens.png'
import women_banner from './Component/Assets/banner_women.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
         <Route path="/men" element={<ShopCategory banner={mens_banner} category="men"/>}/>
          <Route path="/women" element={<ShopCategory banner={women_banner}  category="women"/>}/>
           <Route path="/kids" element={<ShopCategory banner={kids_banner}  category="kid"/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path="/product/:productId" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>}/>
      </Routes>
     <Footer/>
      </BrowserRouter>
    </div>
   
  )
}

export default App
