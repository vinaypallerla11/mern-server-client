import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import Navbar from '../Navbar';
import './index.css';
import Footer from '../Footer'
import { Link } from 'react-router-dom';
import { FaTimes, FaMicrophone } from 'react-icons/fa'; // Import the microphone icon

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [recognizing, setRecognizing] = useState(false); // State to manage voice recognition

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const startVoiceRecognition = () => {
    if (!('SpeechRecognition' in window) && !('webkitSpeechRecognition' in window)) {
      alert('Your browser does not support voice recognition. Please try Google Chrome.');
      return;
    }

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.continuous = false; // Stop after one result
    recognition.interimResults = false; // Get only final results

    recognition.onstart = () => {
      setRecognizing(true); // Start recognizing
    };

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript; // Get the speech result
      setSearchQuery(transcript); // Set the search query to the recognized text
      setRecognizing(false); // Stop recognizing
    };

    recognition.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
      setRecognizing(false); // Stop recognizing
    };

    recognition.onend = () => {
      setRecognizing(false); // Stop recognizing
    };

    recognition.start(); // Start the recognition
  };

  if (loading) {
    return (
      <div className="loading-container">
        <img src="./loading.gif" alt="Loading" className="loading-image" />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className='mobile-icons'>
      <Link to="/"><img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="home" className='home1'/></Link>
        <Link to="/products"><img src="https://img.favpng.com/6/14/1/marketing-amp-growth-icon-product-icon-png-favpng-qvc19bn2QQpkJVRYZ3cB7WaYR.jpg" alt="product" className='product1'/></Link>
        <Link to="/cart"><img src="https://cdn-icons-png.flaticon.com/512/565/565375.png" alt="cart" className='cart1'/></Link>
      </div>
      <div className="search-container">
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <div className='serch-voice-recognization'>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="search-input"
            />
            {searchQuery && (
              <button type="button" className="clear-search-button" onClick={handleClearSearch}>
                <FaTimes />
              </button>
            )}
          </div>
          <div className='vinrecognization'>
            <button type="button" className="voice-search-button" onClick={startVoiceRecognition} disabled={recognizing}>
              <FaMicrophone />
            </button>
          </div>
        </form>
      </div>
      <div className="products-container">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductItem key={product.id} product={product} />
          ))
          
        ) : (
          <p>No products found.</p>
        )}
        <Footer />
      </div>
    </div>
  );
};

export default Products;
