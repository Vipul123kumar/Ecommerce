import React, { useContext } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { useParams } from 'react-router';
import Breadcrums from '../Component/BreadCrum/Breadcrums';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../Component/DescriptionBox/DescriptionBox.jsx';
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct.jsx';
const Product = (props) => {
  const{all_product}=useContext(ShopContext)
  
  console.log(all_product);
  
  
   const {productId}=useParams();
   const product=all_product.find((item)=>
  
      item.id===Number(productId)
  ) 
    console.log(product);
    
  
  return (
   
    <div>
      
        <Breadcrums  product={product}/>
        <ProductDisplay product={product} /> 
        <DescriptionBox/>
        <RelatedProduct/>
    </div>
  )  
}

export default Product
