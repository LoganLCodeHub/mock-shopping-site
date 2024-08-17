import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css'; // Add styling for your cart page

function CartPage({ cart }) {
  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>${item.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      
      {cart.length > 0 && (
        <Link to="/checkout">
          <button className="checkout-button">Proceed to Checkout</button>
        </Link>
      )}
    </div>
  );
}

export default CartPage;
