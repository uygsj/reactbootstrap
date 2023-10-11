// Profile.js (inside the "Profile" folder)
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Movies from '../Movies/Movies';
import Store from '../Products/Store';
import AboutUs from './components/Header/AboutUs';
import Cart from './components/Header/Cart';
import Contact from './components/Header/Contact';

const Profile = () => {
  return (
    <div>
      <h1>Profile Page</h1>
      <Link to="/profile/movies">Movies</Link> |{' '}
      <Link to="/profile/store">Store</Link> |{' '}
      <Link to="/profile/about">About</Link> |{' '}
      <Link to="/profile/cart">Cart</Link> |{' '}
      <Link to="/profile/contact">Contact Us</Link>

      <Routes>
        <Route path="/profile/movies" element={<Movies />} />
        <Route path="/profile/store" element={<Store />} />
        <Route path="/profile/about" element={<AboutUs />} />
        <Route path="/profile/cart" element={<Cart />} />
        <Route path="/profile/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Profile;
