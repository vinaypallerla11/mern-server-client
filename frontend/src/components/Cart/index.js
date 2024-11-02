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
          <div className="empty-cart">
            <p>No items in the cart.</p>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-shopping-cart-icon-download-in-svg-png-gif-file-formats--online-bag-wayfinding-pack-miscellaneous-icons-1211836.png?f=webp&w=256" alt="Empty cart icon" className="cartimage" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
