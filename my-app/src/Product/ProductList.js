import React, { useState } from 'react';
import Cart from '../Header/Cart'; // Import the Cart component

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

function ProductList() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartElements, setCartElements] = useState([]);

  const removeItem = (index) => {
    const updatedCart = [...cartElements];
    updatedCart.splice(index, 1);
    setCartElements(updatedCart);
  
  
  };

  const addToCart = (product) => {
    const existingIndex = cartElements.findIndex((item) => item.title === product.title);

    if (existingIndex !== -1) {
      const updatedCart = [...cartElements];
      updatedCart[existingIndex].quantity++;
      setCartElements(updatedCart);
    } else {
      const updatedCart = [...cartElements, { ...product, quantity: 1 }];
      setCartElements(updatedCart);
    }
  };

  return (
    <div>
      <button onClick={() => setCartVisible(!cartVisible)}>Cart</button>
      <div className="product-list">
        {productsArr.map((product, index) => (
          <div key={index} className="product-item">
            <img src={product.imageUrl} alt={product.title} />
            <div>{product.title}</div>
            <div>${product.price}</div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      {cartVisible && (
        <Cart cartElements={cartElements} onRemoveItem={removeItem} />
      )}
    </div>
  );
}

export default ProductList;
