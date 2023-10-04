import React from 'react';
import ProductList from './components/Products/ProductList';
import { CartProvider } from './CartContext'; // Import the CartProvider

function App() {
  return (
    <CartProvider> {/* Wrap your app with CartProvider */}
      <div className="App">
        <ProductList />
      </div>
    </CartProvider>
  );
}

export default App;
