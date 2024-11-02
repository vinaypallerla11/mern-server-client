import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../Navbar';
import './index.css'; // Ensure this path matches your project structure

const Cart = () => {
  const location = useLocation();
  const { product } = location.state || {}; // Get the product data

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h1>My Cart</h1>
        {product ? (
          <div className="cart-item">
            <img src={product.image} alt={product.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h2>{product.title}</h2>
              <p className="cart-item-price">Price: ${product.price}</p>
              <p><span className='stock'>Available:</span> In Stock</p>
              <p>Rating: {product.rating.rate} <span className='starimg'>⭐</span></p>
            </div>
          </div>
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;