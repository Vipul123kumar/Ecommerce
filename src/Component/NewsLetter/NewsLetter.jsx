import React from 'react'
import logo from '../Assets/logo.png'
const NewsLetter = () => {
  return (
    <div className='flex flex-col items-center justify-center  mb-20  p-8 m-auto  w-220  ' style={{ background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)" }}>
        <div className='flex flex-col items-center justify-center mt-3 p-2 '>
         <h1 className='text-3xl font-bold m-2 '>Get Exclusive Offers On Your Email</h1>
         <p className='text-1xl m-1 p-1 mb-2 '>Subscribe to our newsletter and stay updated </p>
         </div>

         <div className='flex flex-row items-center justify-center m-2 gap-0 '>
            <input type="email" placeholder=' your emailid' className='p-2 mt-2 border border-gray-300 rounded-full bg-white-500 p-2 w-90 cursor-pointer  ' />
            <button className='p-2 m-2 bg-black  text-white rounded-full cursor-pointer  hover:bg-blue-700 p-2 w-35 '>Subscribe</button>
         </div>
         
    </div>
  )
}

export default NewsLetter
