import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Store from './Products/Store';
import Cart from './Header/Cart';
import AboutUs from './Header/AboutUs';
import { CartProvider } from '../CartContext';
import Home from './Header/Home';
import Movies from './Movies/Movies';
import Contact from './Header/Contact';
import ProductDetails from './Products/ProductDetail';
import Login from './Header/Login';
import { AuthContextProvider } from './Products/Store/AuthContext';

const Profile = () => {
  return (
    <AuthContextProvider>
      <div className="Profile">
        <Header />
        <Routes>
          <Route path="/profile/store" element={<Store />} />
          <Route path="/profile/cart" element={<Cart />} />
          <Route path="/profile/about" element={<AboutUs />} />
          <Route path="/profile/home" element={<Home />} />
          <Route path="/profile/movies" element={<Movies />} />
          <Route path="/profile/contact" element={<Contact />} />
          <Route path="/profile/product/:productId" element={<ProductDetails />} />
          <Route path="/profile/login" element={<Login />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
};

export default Profile;
