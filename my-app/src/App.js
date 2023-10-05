import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes from react-router-dom
import Header from './components/Header/Header';
import ProductList from './components/Products/ProductList';
import Cart from './components/Header/Cart';
import AboutUs from './components/Header/AboutUs';
import { CartProvider } from './CartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header />
          <Routes> {/* Wrap your routes in a <Routes> component */}
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutUs />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
