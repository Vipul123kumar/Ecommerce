import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'


const Breadcrums = (props) => {
    // const {Selected}=props;
const {product}=props;
    console.log("in bread");
    
  return (
    <div className='flex flex-row mt-2 gap-1 m-5'>
       
       HOME<img src={arrow_icon} alt='' className='h-3 w-3 mt-2'/>SHOP<img src={arrow_icon} alt='' className='h-3 w-3 mt-2'/> {product.category} <img src={arrow_icon} alt='' className='h-3 w-3 mt-2'/> {product.name}   
         
          
    </div>
  )
}

export default Breadcrums 
