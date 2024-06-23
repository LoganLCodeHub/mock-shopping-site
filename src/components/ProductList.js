import React from 'react';

function ProductList() {
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

  return (
    <div className="product-list">
      <h2 id="h2-unique-font">Products</h2>
      <div className="product-container">
        {products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.imageUrl} alt={product.name} />
            <p>{product.name} - ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
