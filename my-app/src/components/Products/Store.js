import React, { useState } from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { useCart } from '../../CartContext'; 
import Cart from '../Header/Cart'// Import useCart from CartContext
import ShimmerCard from './ShimmerCard';

const productsArr = [
  {
    id: 1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id: 2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id: 3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id: 4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];

function ProductList() {
  const [cartVisible, setCartVisible] = useState(false);
  const { cartElements, addToCart } = useCart();

  // Function to calculate the count of unique item IDs
  const calculateUniqueItemCount = () => {
    const uniqueItemIds = new Set(cartElements.map((item) => item.id));
    return uniqueItemIds.size;
  };

  return (
    <Container>
      <Row>
        <Col xs={12} sm={12} md={12} lg={9}>
          <Row>
            {productsArr.length === 0 ? ( // Check if productsArr is empty
              // Render ShimmerCard while data is loading
              <Col xs={12} sm={6} md={6} lg={6}>
                <ShimmerCard />
              </Col>
            ) : (
              // Render product cards when data is available
              productsArr.map((product) => (
                <Col key={product.title} xs={12} sm={6} md={6} lg={6}>
                  <div className="product-item">
                    <Image src={product.imageUrl} alt={product.title} fluid />
                    <div>{product.title}</div>
                    <div>${product.price}</div>
                    <Button onClick={() => addToCart(product)}>Add to Cart</Button>
                  </div>
                </Col>
              ))
            )}
          </Row>
        </Col>
        <Col xs={12} sm={12} md={12} lg={3} className="text-right">
          <Button onClick={() => setCartVisible(!cartVisible)}>
            Cart ({calculateUniqueItemCount()})
          </Button>
          {cartVisible && <Cart />}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductList;
