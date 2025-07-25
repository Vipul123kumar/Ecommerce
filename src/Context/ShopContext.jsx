import React ,{createContext, useState} from "react";
import all_product from '../Component/Assets/all_product'
export const ShopContext=createContext(null);
  const getDefaultCart=()=>
  {
    let cart={};
    for(let i=0;i<all_product.length+1;i++)
    {
      cart[i]=0;
    }
    return cart;
  }


  const ShopContextProvider=(props)=>
{
          const [cartItems,setCartItems]=useState(getDefaultCart());
          

           const addToCart=(itemId)=>
           {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
           
            
           }
           const removeFromCart=(itemId)=>
           { 
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
              
            console.log("itme",cartItems);
            
           }

           const getTotalCartAmount=()=>
           {
            let totalAmount=0;
            for (const  item in cartItems)
            {
              if(cartItems[item]>0)
              {
                let totalinfo=all_product.find((product)=>product.id===Number(item))
                totalAmount+=cartItems[item]*totalinfo.new_price;
              }
            }
            return totalAmount;
           }

         const getItemCount=()=>
           {
            let totalCount=0;
            for (const  item in cartItems)
            {
              if(cartItems[item]>0)
              {
               totalCount+=cartItems[item];
              }
            }
            return totalCount;
           }

            const contextValue= {all_product,cartItems,setCartItems,addToCart,removeFromCart,getTotalCartAmount,getItemCount}
   
     return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
     );
};
export default ShopContextProvider;
