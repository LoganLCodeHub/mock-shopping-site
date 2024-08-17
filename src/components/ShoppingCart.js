import React, { useState } from 'react';
import { FaCartPlus } from "react-icons/fa";
import './ShoppingCart.css';

function ShoppingCart({ cart, setCart }) {  // Accept setCart as a prop
  const [hover, setHover] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleCheckboxChange = (item) => {
    setSelectedItems(prevSelected => 
      prevSelected.includes(item)
        ? prevSelected.filter(i => i !== item)
        : [...prevSelected, item]
    );
  };

  const handleRemoveSelected = () => {
    setCart(cart.filter(item => !selectedItems.includes(item)));
    setSelectedItems([]); // Clear selection after removal
  };

  return (
    <div 
      className="shopping-cart" 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2><FaCartPlus />: Cart</h2>
      
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <p>Items: {cart.length}</p>
      )}

      {hover && cart.length > 0 && (
        <div className="cart-dropdown">
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item)}
                  onChange={() => handleCheckboxChange(item)}
                />
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <button onClick={handleRemoveSelected} disabled={selectedItems.length === 0}>
            Remove Selected Items
          </button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
