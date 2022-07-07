import React from 'react'
import './ProductScreen.css'

function ProductScreen() {
  return (
    <div className='productscreen'>
        <div className='productscreen_left'>
            <div className='left_image'>
                <img src='https://static-01.daraz.pk/p/22837b6af2037c2d9f46df56e5b13a55.jpg'  alt='product name'/>
            </div>

            <div className='left_info'>
                <p className='left_name'>Product 1</p>
                <p className='left_price'>Price: $4999.99</p>
                <p className='left_dec'>Price: $4999.99 Price: $4999.99  Price: $4999.99  Price: $4999.99  Price: $4999.99 
                Price: $4999.99  Price: $4999.99 </p>
            </div>
        </div>

        <div className='productscreen_right'>
           <div className='right_info'>
               <p >
                   Price:<span>$499.99</span>
               </p>
               <p>
                   Status: <span>In Stock</span>
               </p>
               <p>
                   Qty:
                   <select>
                       <option value='1'>1</option>
                       <option value='2'>2</option>
                       <option value='3'>3</option>
                       <option value='4'>4</option>
                   </select>
               </p>
               <p>
                   <button type='button'>Add To Cart</button>
               </p>
           </div>

        </div>
    </div>
    
  )
}

export default ProductScreen