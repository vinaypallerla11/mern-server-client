import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import Cookies from 'js-cookie';
import './index.css';

const NavBar = () => {
  const navigate = useNavigate();
  const { cart } = useCart();
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  const onClickLogout = () => {
    Cookies.remove('jwt_token');
    navigate('/', { replace: true });
  };

  return (
    <div className="containerSection">
      <div className="content-nav">
        <Link to="/">
          <h1>
            <img src="https://res.cloudinary.com/ddehbjyiy/image/upload/v1716325832/luxury-letter-v-logo-v-logotype-for-elegant-and-stylish-fashion-symbol-vector_czeu0g.jpg" alt="vlogo" className="img-content" />
            <img src="https://res.cloudinary.com/ddehbjyiy/image/upload/v1704763899/VTrendz_gfuzbu.webp" alt="VTrendz" className="img-content" />
          </h1>
        </Link>
        <div className="nav-container">
          <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/products"><li>Products</li></Link>
            <Link to="/cart"><li>Cart ({cartCount})</li></Link>
          </ul>
          <button type="button" onClick={onClickLogout} className="button-container2">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
