// Example in your header component
import React from 'react';
import { useCart } from '../../CartContext';;

function Header() {
  const { totalQuantity } = useCart(); // Get the totalQuantity from CartContext

  return (
    <div className="header">
      {/* ... */}
      <span className="cart-icon">Cart ({totalQuantity})</span>
    </div>
  );
}

export default Header;
