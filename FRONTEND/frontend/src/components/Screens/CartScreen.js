import React from 'react';
import './CartScreen.css';
import CartItem from './CartItem';


function CartScreen() {
  return (
    <div className='cartscreen'>
       <div className='cartscreen_left'>
          <h2>SHOPPING CART</h2>
          <CartItem/>
       </div>

       <div className='cartscreen_right'>
         <div className='cartscreen_info'>
           <p>subtotal (0) items</p>
           <p>$499.99</p>
         </div>
         <div>
           <button>Proceed To Checkout</button>
         </div>
       </div>
   </div>
  )
}

export default CartScreen