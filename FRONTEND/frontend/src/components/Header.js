// import React from "react";
// import App from "../App";

// function Header(){
//    return(
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>

//     <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
//       {/* <a class="navbar-brand" href="#">Hidden brand</a> */}
//       <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
//       <li class="nav-item">
//           <a class="nav-link disabled" href="#">logo</a>
//         </li>
//         <li class="nav-item active">
//           <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">About</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link " href="#">Shop</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link " href="#">Contact</a>
//         </li>
//       </ul>

//       <form class="form-inline my-2 my-lg-0">
//         <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//       </form>

//     </div>
//   </nav>
//    )
// }

// export default Header;

import React from 'react'
import './Header.css';
import {Link} from 'react-router-dom';

export const Header = () => {
  return (
    <nav className="navbar">
        {/* logo */}
        <div className='navbar_logo'>
            <h2>MEARN Shopping Cart</h2>

        </div>
        {/* links */}
        <div className='navbar_link'>
            <li>
                <Link to="/cart">
                   
                </Link>
            </li>
        </div>
        {/* hamburger menu */}

    </nav>
  )

}

export default Header;
