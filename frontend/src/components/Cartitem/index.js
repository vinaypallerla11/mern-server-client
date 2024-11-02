import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../Navbar';
import { FaRegStar } from "react-icons/fa";
import './index.css'; // Ensure this path matches your project structure

const CartItem = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate
  const { productId } = location.state || {};
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) return;
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) throw new Error('Failed to fetch product');
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>No product details available.</div>;

  const handleAddToCart = () => {
    // Redirect to the Cart component and pass the product data
    navigate('/cart', { state: { product } });
  };

  return (
    <div>
      <Navbar />
      <div className="cart-item-container">
        <div className="cart-item">
          <img src={product.image} alt={product.title} className="cart-item-image" />
          <div className="cart-item-details">
            <h2>{product.title}</h2>
            <p className="cart-item-price">Price: ${product.price}</p>
            <button className='button-star'>{product.rating.rate}<FaRegStar className='starimg' /></button>
            <p>Description: {product.description}</p>
            <p><span className='stock'>Available:</span> In Stock</p>
            <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
