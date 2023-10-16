import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useCart } from '../../CartContext';

function CartButton() {
  const { calculateUniqueItemCount } = useCart(); // Get the calculateUniqueItemCount function from CartContext

  return (
    <Button>
      Cart ({calculateUniqueItemCount()})
    </Button>
  );
}

export default CartButton;
