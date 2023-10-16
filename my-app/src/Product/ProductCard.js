import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Cart } from "../Store/CartContext";

const ProductCard = ({ title, price, imageUrl }) => {
  const [addItem, setAddItem] = useState([]);

  const addToCart = (item) => {
    Cart.addItem();
    setAddItem(item);
  };

  return (
    <div>
      <Card style={{ width: "18rem" }} className="m-3">
        <Card.Img variant="top" src={imageUrl} alt="pic" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Rs. {price}</Card.Text>
          <Button
            variant="primary"
            className="m-1"
            onClick={() => addToCart(addItem)}
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
