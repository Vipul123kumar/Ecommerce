import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const Popular = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-10px h-90vh mb-15'>
        <h1 className='text-center text-4xl   shadow-l p-2 m-2 w-100 text-black-500 '>POPULAR IN WOMEN</h1>
        <hr className='border-3 bg-black-300 w-25 items-center m-2  '/>
   <div className='flex flex-row items-center justify-center gap-7 flex-wrap mt-5 mb-15'>
    {data_product.map((item,i)=>
    
       { return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /> }
   )}
   </div>
    </div>
  )
}

export default Popular
