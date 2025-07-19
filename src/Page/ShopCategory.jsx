import React from 'react'

const ShopCategory = (props) => {
    console.log(props.category);
    
  return (
    <div>
      <h2>shop cat {props.category}</h2>
    </div>
  )
}

export default ShopCategory
