import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';

export const Header = (click) => {
  return (
    <nav className="navbar">
        {/* logo */}
        <div className='navbar_logo'>
            <h2 style={{ fontFamily : "Lucida Console, Courier New, monospace", fontSize:"40px"}}>MEARN Shopping Cart</h2>
        </div>
        {/* links */}
        <ul className='navbar_link'>
        <li>
                <Link to="/">
                  Home
                </Link>
            </li>
           
            <li>
                <Link to="/about">
                  About
                </Link>
            </li>
            <li>
                <Link to="/contact">
                  Contact
                </Link>
            </li>
            <li>
                <Link to="/pdf">
                   PDF
                </Link>
            </li>
            
            <li>
                <Link to="/cart" className='cart__link'>
                   {/* icon */}
                   <i className='fas fa-shopping-cart'></i>
                   <span>
                   Cart
                   <span className='cartlogo_badge'>
                      0
                   </span>
                   </span>
                </Link>
            </li>

           
        </ul>
       
        {/* hamburger menu */}
        <div  className='login_user'>
        <li>
                <Link to="/home" >
                   {/* icon */}
                   <i className='fas fa-user'></i>
                </Link>
            </li>
        </div>
        

    </nav>
  )

}

export default Header;
