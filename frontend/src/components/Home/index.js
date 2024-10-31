import React, { useEffect } from 'react';
import Navbar from '../Navbar'
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import Footer from '../Footer'

const Home = () => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get('jwt_token');

  useEffect(() => {
    if (!jwtToken) {
      navigate('/login'); // Redirect to login page if user is not authenticated
    }
  }, [jwtToken, navigate]);

  if (!jwtToken) {
    return null;
  }

  return (
    <>
      <div className='homeapp'>
      <Navbar/>
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
          <p className="home-description">
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <Link to="/products">
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src="https://res.cloudinary.com/ddehbjyiy/image/upload/v1716328885/shopping_img_mtqflw.avif"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
