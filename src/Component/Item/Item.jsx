import React from 'react'
import { Link } from 'react-router'

const Item = (props) => {
  return (
    <div className='itransform transition duration-300 hover:scale-105 tem w-55 m-2 p-2 shadow-md '>
     <Link to={`/product/${props.id}`}>  <img src={props.image} alt=''/></Link>
      <p className='m-6px 0px'>{props.name}</p>

      <div className='flex flex-row gap-5 '>
        <div className='font-18x '>${props.new_price} </div>
         <div className='font-18x text-gray-400 line-through '> ${props.old_price} </div>
      </div>
    </div>
  )
}

export default Item
