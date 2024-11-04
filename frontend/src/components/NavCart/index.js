import React from 'react';
import Navbar from '../Navbar'
import Cart from '../Cart'
import './index.css'
import Footer from '../Footer'



const index = () => {
  return (
    <div>
      <Navbar/>
      <Cart />
      <Footer/>
    </div>
  );
}

export default index;

