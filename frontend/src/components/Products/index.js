// App.js
import React, { useState, useEffect } from 'react';
import NavBar from '../Navbar';
import './index.css'; // Import your CSS file for styling
import { FiSearch, FiX, FiMic } from 'react-icons/fi'; // Import icons from react-icons library
import { FaRegStar } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Footer from '../Footer'

const Index = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showClearButton, setShowClearButton] = useState(false); // State to show clear button

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const results = data.filter((item) => {
      return (
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setSearchResults(results);
  }, [searchTerm, data]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setShowClearButton(!!e.target.value); // Show clear button if there's input
  };

  const clearSearch = () => {
    setSearchTerm('');
    setShowClearButton(false); // Hide clear button when input is cleared
  };

  const startVoiceSearch = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
    
    recognition.onstart = () => {
      console.log('Voice search started');
    };
    
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setSearchTerm(transcript);
    };
    
    recognition.onerror = (event) => {
      console.error('Voice search error:', event.error);
    };
    
    recognition.onend = () => {
      console.log('Voice search ended');
    };
    
    recognition.start();
  };

  if (loading) {
    return <div className='loading'> <AiOutlineLoading3Quarters /> </div>;
  }

  if (data.length === 0) {
    return <div>Error fetching data</div>;
  }

  return (
    <div>
      <NavBar />
      <div className='container'>
        <div className="marquee-container">
          <div className="marquee-text">
            <span>Welcome to our website! Check out our latest offers.</span>
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
              aria-label="Search"
            />
            {showClearButton && (
              <button className="clear-button" onClick={clearSearch} aria-label="Clear search">
                <FiX />
              </button>
            )}
            <button className="voice-search-button" onClick={startVoiceSearch} aria-label="Start voice search">
              <FiMic />
            </button>
          </div>
        </div>
        <div className="card-container">
          {searchResults.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.title} className='im-content'/>
              <div className="card-content">
                <h2>{item.title}</h2>
                <p className='para'>$ {item.price}/-</p>
                <button className='button-star'>{item.rating.rate}<span><FaRegStar className='starimg' /></span></button>
                <button className='cart-button'>Add to Cart</button>
                <button className='buy-button'>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
    
  );
};

export default Index;
