import React, { useState } from 'react'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
    const[menu,setMenu]=useState("shop")
  return (
    <div className='flex justify-between p-16px shadow-md bg-white'>
           <div className='flex items-center gap-1 p-5'>
            <img className='h-8' src={logo} alt=''/>
            <p className='text-xl  text-black-500  font-bold'>SHOPPER</p>
           </div>
           <ul className='flex justify-between gap-17 p-9'>
            <li className='flex flex-col items-center cursor-pointer ' onClick={()=>setMenu("shop")} > <Link to='/'> Shop</Link> {menu=="shop"?<hr  className='w-6 h-[3px] mt-2 bg-red-500 border-0 rounded'/>:<></> }</li>
            <li className='flex flex-col items-center cursor-pointer' onClick={()=>setMenu("Men")}><Link to="/men">Men</Link> {menu=="Men"?<hr  className='w-6 h-[3px] mt-2 bg-red-500 border-0 rounded'/>:<></> }</li>
            <li className='flex flex-col items-center cursor-pointer' onClick={()=>setMenu("Women")}> <Link to="/women"> Women</Link> {menu=="Women"?<hr  className='w-6 h-[3px] mt-2 bg-red-500 border-0 rounded'/>:<></> }</li>
            <li className=' flex flex-col items-center cursor-pointer' onClick={()=>setMenu("Kids")}> <Link to="/kids">Kids</Link> {menu==="Kids"?<hr className='w-6 h-[3px] mt-2 bg-red-500 border-0 rounded'/>:<></> }</li>
           </ul>

           <div className='flex justify-between gap-5 p-5'>
            <Link to="/login"><button className='border-1 m-3 h-9 w-22 rounded-full cursor-pointer active:bg-gray-200 '> Login</button></Link>
            <div className='relative w-fit'>
           <Link to="/cart"><img className='h-6 w-6 items-center text-center m-5 cursor-pointer' src={cart_icon} alt=''/></Link> 
            <div className='absolute top-2 right-2  w-4 h-4 bg-red-500 flex  justify-center text-white   items-center rounded-full'>0</div>
           </div>
           </div>
    </div>
  )
}

export default Navbar
