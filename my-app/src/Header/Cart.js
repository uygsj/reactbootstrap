// Cart.js
import React from 'react';
import { useCart } from '../CartContext';
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
            <Image src={item.imageUrl} alt={item.title} thumbnail className="img-thumbnail" /> 
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

/*import CartItem from "./cartItem";
const cartElements = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
    },

    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
    },
]
const Cart = () => {
    return (
        <div>
            <ul>
                {cartElements.map((item) => {
                    return (
                        <CartItem {...item}  key={item.id}/>
                    )
                })}
            </ul>
        </div>
    )
}
export default Cart;*/
