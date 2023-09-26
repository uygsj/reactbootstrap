import './ProductList.css'
import ProductsArr from './ProductScreen';

function ProductList() {
  return (
    <div className="product-container">
      {ProductsArr.map((product, index) => (
        <div className="product-card" key={index}>
          <h2>{product.title}</h2>
          <p>Price: {product.price}</p>
          <img src={product.imageUrl} alt={product.title} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
