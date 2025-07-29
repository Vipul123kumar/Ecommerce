import React, { useContext, useState } from 'react'
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/nav_dropdown.png';
const Navbar = () => {
    const[menu,setMenu]=useState("shop")
    const {getItemCount}=useContext(ShopContext)
  return (
    <div className='bg-gray-300 sm:bg-white  flex justify-between  shadow-md  md:bg-black-500'>
           <div className='flex items-center gap-1 p-5'>
            <img className='h-8' src={logo} alt=''/>
            <p className='text-xl  text-black-500  font-bold'>SHOPPER</p>
           </div>
           {/* <img src={nav_dropdown} alt=''/> */}
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
            <div className='absolute top-2 right-2  w-4 h-4 bg-red-500 flex  justify-center text-white   items-center rounded-full'>{getItemCount()}</div>
           </div>
           </div>
    </div>

//     <div className="flex flex-col md:flex-row justify-between items-center px-4 py-2 md:px-8 shadow-md bg-white">
//   {/* Logo */}
//   <div className="flex items-center gap-2 py-2">
//     <img className="h-8" src={logo} alt="logo" />
//     <p className="text-xl text-black font-bold">SHOPPER</p>
//   </div>

//   {/* Navigation Menu */}
//   <ul className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 py-2">
//     <li className="flex flex-col items-center cursor-pointer" onClick={() => setMenu("shop")}>
//       <Link to="/">Shop</Link>
//       {menu === "shop" && <hr className="w-6 h-[3px] mt-1 bg-red-500 border-0 rounded" />}
//     </li>
//     <li className="flex flex-col items-center cursor-pointer" onClick={() => setMenu("Men")}>
//       <Link to="/men">Men</Link>
//       {menu === "Men" && <hr className="w-6 h-[3px] mt-1 bg-red-500 border-0 rounded" />}
//     </li>
//     <li className="flex flex-col items-center cursor-pointer" onClick={() => setMenu("Women")}>
//       <Link to="/women">Women</Link>
//       {menu === "Women" && <hr className="w-6 h-[3px] mt-1 bg-red-500 border-0 rounded" />}
//     </li>
//     <li className="flex flex-col items-center cursor-pointer" onClick={() => setMenu("Kids")}>
//       <Link to="/kids">Kids</Link>
//       {menu === "Kids" && <hr className="w-6 h-[3px] mt-1 bg-red-500 border-0 rounded" />}
//     </li>
//   </ul>

//   {/* Login and Cart */}
//   <div className="flex items-center gap-4 py-2">
//     <Link to="/login">
//       <button className="border border-gray-400 px-4 py-1 rounded-full hover:bg-gray-100">Login</button>
//     </Link>

//     <div className="relative">
//       <Link to="/cart">
//         <img className="h-6 w-6 cursor-pointer" src={cart_icon} alt="cart" />
//       </Link>
//       <div className="absolute top-[-6px] right-[-6px] w-4 h-4 bg-red-500 text-xs text-white flex items-center justify-center rounded-full">
//         {getItemCount()}
//       </div>
//     </div>
//   </div>
// </div>
  )
}

export default Navbar
