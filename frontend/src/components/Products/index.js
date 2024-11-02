// Index.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiX, FiMic } from 'react-icons/fi';
import { FaRegStar } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import NavBar from '../Navbar';
import Footer from '../Footer';
import './index.css';

const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showClearButton, setShowClearButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Network response was not ok');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const results = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults(data);
    }
  }, [searchTerm, data]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    setShowClearButton(!!term);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setShowClearButton(false);
  };

  const handleCardClick = (productId) => {
    navigate('/cartitem', { state: { productId } });
  };

  if (loading) return (
    <div className='loading'>
      <AiOutlineLoading3Quarters /> Loading...
    </div>
  );

  return (
    <div>
      <NavBar />
      <div className='container'>
        <div className="marquee-container">
          <div className="marquee-text">
            <span>Welcome to our vtrendz! Check out our latest offers.</span>
          </div>
        </div>
        <div className="search-container">
          <div className="search-box">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
              className="search-input"
            />
            {showClearButton && (
              <button className="clear-button" onClick={clearSearch}>
                <FiX />
              </button>
            )}
            <button className="voice-search-button">
              <FiMic />
            </button>
          </div>
        </div>
        <div>
          <ul className="card-container">
            {searchResults.map((item) => (
              <li 
                key={item.id} 
                className="card" 
                onClick={() => handleCardClick(item.id)}
                style={{ cursor: 'pointer' }}
              >
                <img src={item.image} alt={item.title} className='im-content' />
                <div className="card-content">
                  <h2>{item.title}</h2>
                  <p className='para'>${item.price}/-</p>
                  <button className='button-star'>
                    {item.rating.rate} <FaRegStar className='starimg' />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
