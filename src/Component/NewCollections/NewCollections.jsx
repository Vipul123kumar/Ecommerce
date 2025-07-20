import React from 'react'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
const NewCollections = () => {
  return (
    <div className='flex flex-col items-center justify-center m-2 p-2   '>
          <h2 className='text-4xl p-2 '>NEW COLLECTIONS</h2>
          <hr className='border-3 bg-black-300 w-55 items-center m-3  '/>
          <div className='flex flex-row  items-center justify-center gap-2 flex-wrap m-3 mb-10 shadow-md w-280 '>
          {new_collections.map((item,i)=>
        {
            return <Item key={i} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
        })}  
        </div>
    </div>
  )
}

export default NewCollections
