import React from 'react'
import './CartItem.css'
import {Link} from 'react-router-dom'

function CartItem() {
  return (
    <div className='cartitem'>
         <div className='cartitem_image'>
            <img src='https://static-01.daraz.pk/p/22837b6af2037c2d9f46df56e5b13a55.jpg' alt='product name'/>
         </div>

         <Link to={`/product/${1111}`} className="cartittem_name">
             <p>Poduct_1</p>
         </Link>

         <p className='cartitem_price'>$499.99</p>

         <select className='cartitem_select'>
             <option value='1'>1</option>
             <option value='2'>2</option>
             <option value='3'>3</option>
             <option value='4'>4</option>
         </select>

         <button className='cartitem_deleteBtn'>
             <i className='fas fa-trash'> </i>
         </button>
    </div> 
  )
}

export default CartItem