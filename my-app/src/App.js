
/*import Store from "./Product/Store";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "./Header/Header";
import Cart from "./Header/Cart";
import Home from "./Header/Home";
import About from "./Header/AboutUs";
import Movies from "./components/Movies/Movies";

const AppLayout = () => {
 
   
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Store/>, 
      },
     
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/Movies",
        element: <Movies/>,
      }
    ],
  },
]);

export default appRouter;*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Store from './Product/Store';
import Cart from './Header/Cart';
import AboutUs from './Header/AboutUs';
import { CartProvider } from './CartContext';
import Home from './Header/Home';
import Movies from './components/Movies/Movies';
import Contact from './Header/Contact';
import ProductDetails from './Products/ProductDetail';
import Login from './Header/Login';
import { AuthContextProvider } from './Products/Stored/AuthContext';
import ChangePasswordForm from './Header/ChangePasswordForm';

function App() {
  return (
    <AuthContextProvider>
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/changepasswordform" element={<ChangePasswordForm />} />
            </Routes>
          </div>
        </CartProvider>
      </Router>
    </AuthContextProvider>
  );
}

export default App;

