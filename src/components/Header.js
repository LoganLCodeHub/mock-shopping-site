import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import './Header.css';

function Header({ cart, setCart }) {  // Accept setCart as a prop
  return (
    <header id="organize">
      <div id="leftBox"></div>
      <nav id="center">
        <div id="centerNav">
          <h1>Mock Shopping Site</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/SignUp">Sign In / Sign Up</Link></li>
          </ul>
        </div>
      </nav>
      <div id="rightBox">
        <ShoppingCart cart={cart} setCart={setCart } id="cartCenter"/>  {/* Pass setCart */}
      </div>
    </header>
  );
}

export default Header;
