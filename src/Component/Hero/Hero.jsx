import React from 'react'
import hand_icon from '../Assets/hand_icon.png'

import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import cart_icon from '../Assets/cart_icon.png'
const Hero = () => {
  return (
    <div className='HERO  flex  justify-between items-center gap-5 '
    style={{ background: "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)" }}
    >
        <div className='LEFT  h-100  w-150 gap-2 ml-17 mt-20 p-7 '>
           <h2 className=' text-bold'>NEW ARRIVALS ONLY</h2>
            <div className='flex felx-row gap-1  '>
            <p className='text-5xl font-bold mt-2 pt-2'>new</p>
            <img className="h-12 w-15 mt-2 pt-2" src={hand_icon} alt=''/>
           </div>
         
            <p className='text-5xl font-bold pt-2 '>collections</p>
            <p className='text-5xl font-bold pt-2'>for everyone</p>
            <div className='flex flex-row gap-2 mt-6 border-2 items-center text-center justify-center w-50 p-2 mt-2 rounded-full bg-red-400 text-white cursor-pointer hover:bg-red-500'>
                <div>Latest Collection</div>
                <img src={arrow_icon} alt='' />
            </div>
        </div>
        <div className='RIGHT m-3 mt-2 '>
            <img  className=" h-140  w-120  mr-7 "src={hero_image} alt=''/>
        </div>

    </div>
  )
}

export default Hero
