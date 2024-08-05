import React from 'react';
import { FaCartPlus } from "react-icons/fa";

function ShoppingCart({ cart }) {
  return (
    <div className="shopping-cart">
      <h2><FaCartPlus />: Cart</h2>
      
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;
