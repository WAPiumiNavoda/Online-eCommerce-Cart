import React from 'react'
import './HomeScreen.css';
import Products from '../../Item/Products.js'

const HomeScreen = () => {
  return (
    <div className='homescreen'>
    <h2 className='homescreen_title'>Latest Products</h2>

    <div className='homescreen_products'>
      <Products/>
      <Products/>
      <Products/>
      <Products/>
      <Products/>
      <Products/>
    </div>
  </div>
  )
}

export default HomeScreen