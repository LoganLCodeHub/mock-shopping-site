import React from 'react';
import './ProductList.css';

function ProductList({ cart, setCart }) {  // Use props to receive cart and setCart
  const products = [
    { id: 1, name: 'Product 1', price: 10, imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 20, imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 30, imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 40, imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Product 5', price: 50, imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Product 6', price: 60, imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Product 7', price: 70, imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Product 8', price: 80, imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Product 9', price: 90, imageUrl: 'https://via.placeholder.com/150' },
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <h2 id="h2-unique-font">Products</h2>
      <div className="product-list">
        <div className="product-container">
          {products.map(product => (
            <div key={product.id} className="product-item">
              <img src={product.imageUrl} alt={product.name} />
              <p>{product.name} - ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductList;
