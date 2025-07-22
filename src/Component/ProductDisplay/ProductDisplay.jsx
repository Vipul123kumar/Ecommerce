import React, { useContext } from 'react'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product}=props;
    console.log("in the displayh");
    const {addToCart}=useContext(ShopContext);

    

  return (
    <div className='flex flex-row mt-5 gap-3 ml-5 p-5 m-auto   '>
       <div className='flex flex-row mt-5 ml-10 gap-3 '> 
        <div className=' gap-3 flex flex-col'>
            <img src={product.image} alt='' className='h-24 w-20 '/>
             <img src={product.image} alt='' className='h-24 w-20 '/>
              <img src={product.image} alt='' className='h-24 w-20 '/>
              <img src={product.image} alt='' className='h-24 w-20 '/>
        </div>

             <div className='mid '>
              <img src={product.image} alt='' className='h-105 w-100  '/>
             </div>
        </div> 

        <div className='right  flex flex-col gap-3 ml-65 h-115 w-105 '>
           <h1 className='text-2xl font-bold '>{product.name} </h1>
           <div className='flex flex-row gap-1'>
                <img src={star_icon} alt=''/> 
                  <img src={star_icon} alt=''/> 
                  <img src={star_icon} alt=''/> 
                  <img src={star_icon} alt=''/> 
                    <img src={star_dull_icon} alt=''/> 
                    <p>(122)</p>
           </div>
          
             <div className='flex flex-row gap-5 '>
                  <div className='font-18x '>${product.new_price} </div>
                    <div className='font-18x text-gray-400 line-through '> ${product.old_price} </div>
             </div>

                <div>
                    A lightweight , usually knitted, pullover garment, typically with long sleeves, worn over the upper body.
                </div>
                <div className='flex flex-col gap-2 '>
                        <h2>Select Size</h2>
                           <div className='flex flex-row gap-3 mt-3 mb-2   '>
                            <div className='p-1 shadow-md bg-gray-100 cursor-pointer h-14 w-9 flex items-center justify-center text-center  '>S </div>
                           <div className='p-1 shadow-md bg-gray-100 cursor-pointer h-14 w-9 flex items-center justify-center text-center '>M </div>
                            <div className='p-1 shadow-md bg-gray-100 cursor-pointer h-14 w-9 flex items-center justify-center text-center'>L </div>
                           <div className='p-1 shadow-md bg-gray-100 cursor-pointer h-14 w-9 flex items-center justify-center text-center'>XL </div>
                            <div className='p-1 shadow-md bg-gray-100 cursor-pointer h-14 w-9 flex items-center justify-center text-center'>XXL </div>
                     </div>
                     <button onClick={()=>addToCart(product.id)} className=' flex items-center justify-center p-2 bg-red-300 h-8 w-40 cursor-pointer  ' >ADD TO CART </button>
                </div>

                <div className='flex flex-col gap-2 p-2 '> 
                     <p className='text-1xl '> <spn>Category:</spn> Women, T-Shirt, Crop Top  </p>
                     <p> <span>Tags:</span> Modern Latest </p>
                </div>
        </div>

    </div>
  )
}

export default ProductDisplay
