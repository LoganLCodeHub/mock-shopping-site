import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Contact from './components/Contact';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
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
