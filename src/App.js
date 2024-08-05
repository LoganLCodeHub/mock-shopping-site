import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import './styles.css';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <div className="App">
        <Header cart={cart} /> {/* Pass cart state as a prop */}
        <Routes>
          <Route path="/" element={<ProductList cart={cart} setCart={setCart} />} /> {/* Pass cart state and setCart function */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <footer className="footer">
          © 2024 Mock Shopping Site. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

export default App;
