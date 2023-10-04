import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartElements, setCartElements] = useState([]);

  const addToCart = (product) => {
    const updatedCart = [...cartElements];
    const existingItemIndex = updatedCart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      // If it's in the cart, update the quantity
      updatedCart[existingItemIndex].quantity++;
    } else {
      // If it's not in the cart, add it with a quantity of 1
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCartElements(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartElements.filter((item) => item.id !== productId);
    setCartElements(updatedCart);
  };

  // Function to calculate the count of unique item IDs
  const calculateUniqueItemCount = () => {
    const uniqueItemIds = new Set(cartElements.map((item) => item.id));
    return uniqueItemIds.size;
  };

  return (
    <CartContext.Provider value={{ cartElements, addToCart, removeFromCart, calculateUniqueItemCount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
