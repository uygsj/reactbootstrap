// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Store from './components/Products/Store';
import Cart from './components/Header/Cart';
import AboutUs from './components/Header/AboutUs';
import { CartProvider } from './CartContext';
import Home from './components/Header/Home';
import Movies from './components/Movies/Movies';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/store" element={<Store />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
