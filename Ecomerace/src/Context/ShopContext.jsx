import React, { createContext, useEffect, useRef, useState } from "react";
import all_product from "../Components/Assets/all_product";
import CartItems from "../Components/CartItems/CartItems";

export const ShopContext = createContext(null);
const getDefaultCart = ()=>{
  let cart = {};
  all_product.forEach((item)=>{
    cart[item.id] = 0;
  })
  return cart;
}


const ShopContextProvider =(props)=>{

  const [cartitems, setCartItems] = useState(getDefaultCart());



const addToCart = (itemid)=>{
setCartItems((cartitems)=>({
  ...cartitems,[itemid]:cartitems[itemid] +1
}))
console.log(cartitems);
}

const removeFromCart = (itemid)=>{
setCartItems((cartitems)=>({
  ...cartitems,[itemid]:cartitems[itemid] -1
}))



}


const getTotalCartAmount = ()=>{
  let totalAmount = 0;
  for (const item in cartitems) {
   if (cartitems[item]>0) {
    let itemInfo = all_product.find((product)=>product.id===Number(item))
    totalAmount+=itemInfo.new_price*cartitems[item]
   }
    
    
  }
  return totalAmount;
}


const getTotalCartItems = ()=>{
  let totatalItem = 0;
for (const item in cartitems) {
if (cartitems[item]>0) {
  totatalItem += cartitems[item]
}
  
  
}
return totatalItem

}


const contextValue = {getTotalCartItems,getTotalCartAmount, all_product, cartitems,addToCart,removeFromCart}

  return(
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
