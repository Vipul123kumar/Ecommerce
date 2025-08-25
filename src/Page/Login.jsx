import React from 'react'
import { Link } from 'react-router'

const Login = () => {
  return (
  <div className='flex flex-row  gap-15 p-20  ' style={{ background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)" }}>
     <div className='bg-white flex flex-col items-center justify-center m-auto w-119 h-120 border-1 '>
       <div className='flex flex-col mb-35 p-2 '> 
        <h1 className='text-2xl mr-70 p-5 mt-15    '>Login</h1>
        <div className='flex flex-col gap-5 mb-5 p-5 items-center justify-center  '>
        <input type='email'placeholder='Enter address ' className='border-1 h-10 w-90 text-center p-2 '/>
        <input type='password' placeholder='Password' className='border-1 h-10 w-90 text-center '/>
        </div>
        <button className='bg-red-300 border-1px rounded h-10 w-85 rounded-md m-auto  mb-1 cursor-pointer hover:bg-red-400 '>Continue</button>
        <p className='m-2 p-2 '>Create an account? <Link to="/signup"> <span className='  text-red-300 cursor-pointer hover:text-red-400'> Click here</span> </Link> </p>
        <div className='gap-2 m-2 p-2 '>
             
          <input type='checkbox' name='' id='' />
          <label>By continueing i agree to the terms of use & privacy policy.</label>
          
        </div>
        </div> 
        
     </div>

    </div>
  )
}

export default Login
