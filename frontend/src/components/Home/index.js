import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar'; // Import NavBar component
import './index.css';
import Footer from '../Footer';

const Home = () => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get('jwt_token');

  useEffect(() => {
    if (!jwtToken) {
      navigate('/login'); // Redirect to login page if user is not authenticated
    }
  }, [jwtToken, navigate]);

  // Prevent rendering while checking authentication
  if (!jwtToken) {
    return null;
  }

  return (
    <>
      <NavBar />
      <div className='homeapp'>
        <div className="home-container">
          <div className="home-content">
            <h1 className="home-heading">Clothes That Get YOU Noticed</h1>
            <p className="home-description">
              Fashion is part of the daily air and it does not quite help that it
              changes all the time. Clothes have always been a marker of the era
              and we are in a revolution. Your fashion makes you be seen and
              heard that way you are. So, celebrate the seasons with new and exciting
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
