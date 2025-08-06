import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItem = () => {
    const {cartItems,all_product,removeFromCart,getTotalCartAmount}=useContext(ShopContext);
    console.log("total");
    
     
  return (
    <div className='flex flex-col gap-6 itmes-center justify-center m-auto   w-220 mt-25'>
        <div className='flex flex-row gap-5items-center justify-between m-2'>
            <p> Products</p>
            <p> Title</p>
             <p> Price</p>
              <p> Quantity</p>
                <p>Total</p>
                <p> Remove</p>
        </div>
       <hr className='h-2 w-220'/>
                 {all_product.map((e)=> 
                {
                    if(cartItems[e.id]>0)
                    {
                        return (
                          <div className='flex flex-col gap-2 '>
                        <div className='flex flex-row gap-1 items-center   '>
                               <img src={e.image} alt='' className='h-15 w-10  '/>
                               <p className='w-50  ml-15'>{e.name}</p>
                               <p className='h-10 w-10  ml-8'>${e.new_price}</p>

                               <p className='border-1  ml-30 h-6 w-6 flex items-center justify-center  '>{cartItems[e.id]}</p>

                               <p className='ml-39'>${cartItems[e.id]*e.new_price}</p>
                                 <img src={remove_icon} alt=''className='h-4 w-4 ml-29 cursor-pointer' onClick={()=>removeFromCart(e.id)}/>

                            </div>
                              <hr className='h-2 w-220'/>
                              </div>
                          
                        )
                    }
                })}
                <div className='flex flex-row gap-5 mt-10 mb-5 items-center justify-between   '>
                  <div className='left flex flex-col gap-2 h-70 w-120 '>
                    <h1 className='text-3xl mb-9 '>Cart Totals</h1>
                    <p className='flex flex-row items-center justify-between '>subtotal <span>${getTotalCartAmount()}</span></p>
                     <hr className='h-2 w-120'/>
                    <p className='flex flex-row items-center justify-between'>shiping Fee <span>free</span></p>
                     <hr className='h-2 w-120'/>
                    <p className='flex flex-row items-center justify-between font-bold  '>Total <span>${getTotalCartAmount()}</span></p>
                    <button className='bg-red-300 text-white flex items-center p-2 h-9 w-50 cursor-pointer mt-5 hover:bg-red-400 '>PROCEED TO CHECKOUT</button>
                  </div>
                  <div className='flex flex-col gap-2  mb-50 '>
                      <p>if you have a promo code , Enter it here </p>
                      <div className='flex flex-row '>
                      <input type='text' placeholder='Enter your code' className='h-10 w-60 p-2 border-1 bg-gray-200'/>
                      <button className='bg-black flex items-center justify-center text-white h-10 w-20 cursor-pointer  '>Submit</button>
                      </div>
                  </div>
                </div>

    </div>
  )
}

export default CartItem
