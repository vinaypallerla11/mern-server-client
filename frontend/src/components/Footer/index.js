import React from 'react';
import { FaGooglePay } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa6";
import { GrAmex } from "react-icons/gr";
import { FaApplePay } from "react-icons/fa";
import { ImPaypal } from "react-icons/im";
import { FaAmazonPay } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import './index.css';

const Index = () => {
  return (
    <div className='container'>
      <hr/>
      <div className='footer-section1'>
        <div className='c'>
          <h1>BE THE FIRST KNOW</h1>
          <p>Sign up for updates from metta muse.</p>
          <div>
            <input type="search"/> <span><button>Subscribe</button></span>
          </div>
        </div>
        <div>
          <h1>CONTACT US</h1>
          <p>+44 221 133 5360</p>
          <p><a href="mailto:customercare@vinay.com">customercare@vinay.com</a></p>
          <h1>CURRENCY</h1>
          <h1>USD</h1>
          <p>Transactions will be completed in Euros and a currency reference is available an hour.</p>
        </div>
      </div>

      <hr/>

      <div className='footer-last-section'>
        <div>
          <h1>metta muse</h1>
          <p><a href="/about">About Us</a></p>
          <p><a href="/stories">Stories</a></p>
          <p><a href="/artisans">Artisans</a></p>
          <p><a href="/boutiques">Boutiques</a></p>
          <p><a href="/contact">Contact Us</a></p>
          <p><a href="/eu-compliance">EU Compliances Docs</a></p>
        </div>
        <div>
          <h1>QUICK LINKS</h1>
          <p><a href="/orders-shipping">Orders & Shipping</a></p>
          <p><a href="/seller">Join/Login as a Seller</a></p>
          <p><a href="/payment">Payment & Pricing</a></p>
          <p><a href="/return-refunds">Return & Refunds</a></p>
          <p><a href="/faqs">FAQs</a></p>
          <p><a href="/privacy-policy">Privacy Policy</a></p>
          <p><a href="/terms-conditions">Terms & Conditions</a></p>
        </div>
        <div>
          <h1>FOLLOW US</h1>
          <p>metta muse ACCEPTS</p>
          <div className='icon-container'>
            <span className='gpay'><FaGooglePay /></span>
            <span className='mcard'><FaCcMastercard /></span>
            <span className='ppay'><ImPaypal /></span>
            <span className='amex'><GrAmex /></span>
            <span className='apay'><FaApplePay /></span>
            <span className='lpay'><FaAmazonPay /></span>
          </div>
        </div>
      </div>
      <div>
        <p className='para1'>Copyright <span><AiOutlineCopyrightCircle /></span> 2024 mettamuse. All rights reserved</p>
      </div>
    </div>
  );
}

export default Index;
