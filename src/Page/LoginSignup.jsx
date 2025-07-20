import React from 'react'

const LoginSignup = () => {
  return (
  <div className='bg-gray-300 '>
     <div className='bg-white h-50 w-100 flex flex-col items-center justify-center m-auto mt-5 '>
        <h1 className='text-1xl mt-2'>Login</h1>
        <div className='flex flex-col gap-5   '>
        <input type='email'placeholder='Enter address ' className='border-1'/>
        <input type='password' placeholder='Password' className='border-1'/>
        </div>
        <button className='bg-red-300 border-1px rounded '>Continue</button>
        <p>Create an account? <span className='bg-red-300'>Click here</span></p>
     </div>

    </div>
  )
}

export default LoginSignup
