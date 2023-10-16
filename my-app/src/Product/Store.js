import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "./ProductCard";

const productsList = [
  {
    id: "Album 1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "Album 2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "Album 3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "Album 4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Body = (props) => {
  return (
    <Container>
      <Row className="flex flex-wrap">
        {productsList.map((product) => (
          <Col key={product.id} md={3}>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Body;
