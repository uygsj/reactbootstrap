import React from "react";

const ProductCard = ({ id, title, price, imageUrl, addToCartProduct }) => {
  const handleAddToCart = () => {
    const product = { id, title, price, imageUrl, quantity: 1 };
    addToCartProduct(product);
  };

  return (
    <div className="card mb-3">
      <img src={imageUrl} className="card-img-top" alt="pic" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Rs. {price}</p>
        <button onClick={handleAddToCart} className="btn btn-primary">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
