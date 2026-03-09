import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const CartItems = () => {
const {getTotalCartAmount,all_product, cartitems, removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
    <div className="cartitems-format-main">
      <p>Product</p>
      <p>Tittle</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
    </div>
<hr />
 {all_product.map((item)=>{
if (cartitems[item.id]>0) {
  return(
    <div key={item.id}>
    <div className="cartitems-format cartitems-format-main ">
    <img src={item.image} alt="" className="caritems-product-icon" />
    <p>{item.name}</p>
    <p>{item.new_price}</p>
    <button className="cartitems-quantity">{cartitems[item.id]}</button>
    <p>{item.new_price*cartitems[item.id]}</p>
    <img src={remove_icon} alt="" className="cartitems-remove-icon"onClick={()=>removeFromCart(item.id)} />
   </div>
   <hr />
    </div>
  )
}
return null;
 })}

<div className="cartitems-down">
  <div className="cartitems-total">
    <h1>Cart Total</h1>
    <div className="cartitems-total-item">
      <p>SubTotal</p>
      <p>${getTotalCartAmount()}</p>
    </div>
    <hr />
  <div className="cartitems-total-item">
   <p>Shipping Fee</p>
   <p>Free</p>
  </div>
  <hr />
  <div className="cartitems-total-item">
  <h3>Total</h3>
  <h3>${getTotalCartAmount()}</h3>
  </div>
  <button>PROCEED TO CHECKOUT</button>
  </div>
  <div className="cartitems-promocode">
    <p>If you have a promocode, Enter it here</p>
    <div className="cartitems-promobox">
      <input type="text" placeholder='promo code' />
      <button>Submit</button>
    </div>
  </div>
</div>

</div>
  )
}

export default CartItems





