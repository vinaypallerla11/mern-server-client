import React from 'react';
import Navbar from '../Navbar'
import Footer from '../Footer'
import './index.css'

const teamMembers = [
  { name: 'Vinay Pallerla', role: 'CEO', imageUrl: 'https://res.cloudinary.com/ddehbjyiy/image/upload/v1667238921/vinay_fkyrks.jpg' },
  { name: 'Jane Smith', role: 'CTO', imageUrl: 'https://res.cloudinary.com/ddehbjyiy/image/upload/v1717571510/vinay_pic_xm9tv1.jpg' },
  { name: 'Alice Johnson', role: 'CMO', imageUrl: 'https://via.placeholder.com/150' },
  { name: 'Bob Brown', role: 'COO', imageUrl: 'https://via.placeholder.com/150' },
  // Add more team members as needed
];

const index = () => {
  return (
    <div>
      <Navbar/>

      <div className="about-container" id="about">
        <div className="about-header">
          <h1>About Us</h1>
          <p>Your one-stop shop for all your needs</p>
        </div>
        <div className="about-content">
          <p>Welcome to VTrendz E-Commerce We are passionate about providing you with the best products and services. Our mission is to deliver quality and value to our customers.</p>
          <p>Founded in [Year], our company has grown from a small startup to a leading player in the e-commerce industry. We offer a wide range of products to cater to all your needs and desires.</p>
          <p>Our team is dedicated to ensuring a seamless shopping experience for you. We continuously strive to improve our platform and services based on your feedback.</p>
          <p>Thank you for choosing VTrendz E-Commerce. We look forward to serving you and making your shopping experience enjoyable and memorable.</p>
        </div>
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.imageUrl} alt={member.name} className="team-member-image" />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default index;

