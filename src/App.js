import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import SignUp from './components/SignUp';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles.css';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header cart={cart} setCart={setCart} />
        <Routes>
          <Route path="/" element={<ProductList cart={cart} setCart={setCart} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <footer className="footer">
          © 2024 Mock Shopping Site. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
