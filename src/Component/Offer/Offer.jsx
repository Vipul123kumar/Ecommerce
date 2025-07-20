import React from 'react'
import exclusive_image from '../Assets/exclusive_image.png'
const Offer = () => {
  return (
    <div className='flex flex-row  gap-15 p-8 m-25 ' style={{ background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)" }}>
    <div className='mt-10 ml-7'>
        <div className='flex flex-col gap-2 ml-7'>
            <p className='text-4xl font-bold '>Exclusive</p>
            <p className='text-4xl font-bold'>Offer For You</p>
            
        </div>
        <div className='flex flex-col gap-2 mt-1 ml-7 '>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button className='p-2 m-2 items-center bg-red-300 hover:bg-red-500 rounded-full w-37 cursor-pointer '>Check Now</button>
        </div>
    </div>

    <div className='ml-97 pl-5'>
       <img src={exclusive_image} alt='' className='h-100 w-70 '/>
    </div>
     </div>
  )
}

export default Offer
