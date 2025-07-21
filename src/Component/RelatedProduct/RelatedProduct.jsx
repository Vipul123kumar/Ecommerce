import React from 'react'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const RelatedProduct = () => {
  return (
    <div className='flex flex-col items-center justify-center m-2 p-2  '>
        <h1 className='text-4xl p-2 '>Related Products</h1>
        <hr className='border-3 bg-black-300 w-55 items-center m-3 '/>
        <div className='flex flex-row items-center justify-center '>
            {data_product.map((item,i)=>{
                return (
                    <Item key={i} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>
                )
            })}
        </div>
    </div> 
  )
  
}

export default RelatedProduct
