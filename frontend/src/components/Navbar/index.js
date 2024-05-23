import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineFormatLineSpacing } from 'react-icons/md';
import './index.css';
import Cookies from 'js-cookie';

const NavBar = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const onClickLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/', { replace: true });
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="containerSection">
      <div className="content-nav">
        <div>
          <Link to="/"><img src= "https://res.cloudinary.com/ddehbjyiy/image/upload/v1716325832/luxury-letter-v-logo-v-logotype-for-elegant-and-stylish-fashion-symbol-vector_czeu0g.jpg" alt="vlogo" className="img-content"/> </Link>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/ddehbjyiy/image/upload/v1704763899/VTrendz_gfuzbu.webp"
              className="img-content"
              alt="avatar"
              onClick={() => navigate('/india', { replace: true })}
            />
          </Link>
        </div>
        <div className="nav-container">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/products"><li>Products</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
          </ul>
          <button type="button" onClick={onClickLogout} className="button-container2">
            Logout
          </button>
        </div>
        <MdOutlineFormatLineSpacing className="mobile-menu-icon" onClick={toggleDropdown} />
      </div>
      {dropdownVisible && (
        <div className="dropdown">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/products"><li>Products</li></Link>
            <Link to="/cart"><li>Cart</li></Link>
            <button type="button" onClick={onClickLogout} className="button-container2">
              Logout
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
