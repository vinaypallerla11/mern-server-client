import React from 'react';
import { useCart } from '../../context/CartContext';
import './index.css';
// import NavBar from '../NavBar';

const ProductItem = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <>
    {/* <NavBar/> */}
    <div className="product-item">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
    </>
  );
};

export default ProductItem;
