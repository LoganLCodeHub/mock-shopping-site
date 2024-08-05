import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart'; // Import the ShoppingCart component
import './Header.css';

function Header({ cart }) { // Accept cart as a prop
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
            <li><Link to="/signup">Sign In / Sign Up</Link></li> {/* Add this link */}
          </ul>
        </div>
      </nav>
      <div id="rightBox">
        <ShoppingCart cart={cart} id="cartCenter"/> {/* Include the ShoppingCart component here */}
      </div>
    </header>
  );
}

export default Header;
