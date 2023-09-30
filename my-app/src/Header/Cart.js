import React from 'react';

function Cart({ cartElements, onRemoveItem }) {
  return (
    <div className="cart">
      {cartElements.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <h2>Cart</h2>
          {cartElements.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.imageUrl} alt={item.title} />
              <div>{item.title}</div>
              <div>${item.price}</div>
              <div>Quantity: {item.quantity}</div>
              <button onClick={() => onRemoveItem(index)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
