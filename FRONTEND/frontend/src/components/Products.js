import React from 'react'
import { Link
} from 'react-router-dom';

import './Products.css';

export const Products = () => {
  return (
    
    <div className='product_main'>
    <img src='https://rukminim1.flixcart.com/image/714/857/shirt/c/h/m/rt-22-royal-touch-m-original-imaekcxvjuksvxtz.jpeg?q=50'
      alt=''/>
    <div className='product_info'>
      <p className='info_name'>Product 01</p>
      <p className='info_dec'>
          Good Product shoe your position clearly.  Good Product shoe your position clearly. 
          Good Product shoe your position clearly. 
      </p>
      <p className='info_price'>$299.99</p>

      <Link to={`/product/${1111}`} className='info_button'>View</Link>

    </div>
</div>    

  )
}

export default Products;
