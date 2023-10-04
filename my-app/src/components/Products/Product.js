import React from "react";
import ProductCard from "./ProductCard";

const productsList = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];


const Product = ({ addToCartProduct }) => {
  return (
    <div>
      <h1>Product List</h1>
      <div className="row">
        {productsList.map((product) => (
          <div key={product.id} className="col-md-6">
            {/* Pass addToCartProduct as a prop to ProductCard */}
            <ProductCard {...product} addToCartProduct={addToCartProduct} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product


