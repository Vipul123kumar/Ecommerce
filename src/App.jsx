import { useState } from 'react'
import React from 'react'
import './index.css'
import Navbar from './Component/Navbar/Navbar'
import Shop from './Page/Shop'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopCategory from './Page/ShopCategory'
import Product from './Page/Product'
import Cart from './Page/Cart'
import LoginSignup from './Page/LoginSignup'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
         <Route path="/men" element={<ShopCategory category="men"/>}/>
          <Route path="/women" element={<ShopCategory category="women"/>}/>
           <Route path="/kids" element={<ShopCategory category="kids"/>}/>
            <Route path="/product" element={<Product/>}/>
            <Route path=":productId" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<LoginSignup/>} />
      </Routes>
     
      </BrowserRouter>
    </div>
   
  )
}

export default App
