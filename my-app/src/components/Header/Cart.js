// Cart.js
import React from 'react';
import { useCart } from '../../CartContext';
import { ListGroup, Image } from 'react-bootstrap';

function Cart() {
  const { cartElements, removeFromCart } = useCart();

  const groupedCartItems = cartElements.reduce((acc, item) => {
    const existingItem = acc.find((groupedItem) => groupedItem.id === item.id);

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      acc.push({ ...item });
    }

    return acc;
  }, []);

  return (
    <div>
      <h1>Cart</h1>
      <ListGroup>
        {groupedCartItems.map((item) => (
          <ListGroup.Item key={item.id}>
            <Image src={item.imageUrl} alt={item.title} thumbnail className="img-thumbnail" /> {/* Apply the 'img-thumbnail' class */}
            <div>{item.title}</div>
            <div>${item.price}</div>
            <div>Quantity: {item.quantity}</div>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Cart;
