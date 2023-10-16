import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

const CartItem = ({ title, price, imageUrl, quantity }) => {
  return (
    <Card className="mb-3">
      <Row className="no-gutters">
        <Col md={4}>
          <Card.Img src={imageUrl} alt="pic" className="w-100" />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>Rs. {price}</Card.Text>
            <Card.Text>{quantity}</Card.Text>
            <Button variant="danger" className="mt-2">Remove</Button>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CartItem;
