import React, { useContext } from 'react'
import{ShopContext} from '../Context/ShopContext.jsx'
import drop_icon from '../Component/Assets/dropdown_icon.png'
import Item from '../Component/Item/Item.jsx'
const ShopCategory = (props) => {
    console.log(props.category);
    const{ all_product=[]} = useContext(ShopContext);
    
  return (
    <div className='flex flex-col  justify-center  '>
     
       <div className='m-auto bg-gray-500 w-280 '>
        { <img src={props.banner} alt=''/>}
      </div> 

      <div className='flex flex-row justify-between m-auto gap-180 '> 
       <p className='m-2 p-2'>
        <span className='font-bold ml-10'>Showing 1-12</span> out of 36 products
       </p>
       <div className='flex flex-rowp-2 items-center justify-center border-1 rounded-full cursor-pointer p-2 gap-1  m-2  '>
        Sort by <img src={drop_icon} alt=''/>
       </div>
       
      </div>
      <div className='flex flex-row  items-center justify-center gap-2 flex-wrap m-auto mb-10 shadow-md w-280  '>
        {
         all_product.map((product,i)=>
          {
            if(product.category===props.category)
            {
              
               return(
                <Item 
                key={i}
                id={product.id}
                 image={product.image}
                  name={product.name} 
                  new_price={product.new_price}
                   old_price={product.old_price} 
                  />
               );
            }
            else{
              return null;
            }
          })
        }
      </div>
      <div className='flex flex-col items-center justify-center text-1xl border-1 rounded-full w-32 h-7 m-auto p-4 m-2 cursor-pointer bg-gray-200   '>
        Explore More
      </div>

    </div>
  )
}

export default ShopCategory
