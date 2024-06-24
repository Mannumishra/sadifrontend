import React from 'react';
import '../footer/footer.css'; 

const Footer = () => {
  return (
    <div className="container">
      <div className="header">
        <img src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094381.png" alt="Smiling person pointing" className="header-image" />
      </div>
      <div className="main-content">
        <h1>#1 WEEDING WEBSITE</h1>
        <h2>Why choose us</h2>
        <p>Most Trusted and premium Matrimony Service in the World</p>
        <div className="features">
          <div className="feature">
            <div className="icon">🌞</div>
            <h3>Genuine profiles</h3>
            <p>Contact genuine profiles with 100% verified mobile</p>
          </div>
          <div className="feature">
            <div className="icon">✅</div>
            <h3>Most trusted</h3>
            <p>The most trusted wedding matrimony by rank</p>
          </div>
          <div className="feature">
            <div className="icon">💍</div>
            <h3>1600+ weddings</h3>
            <p>Lakhs of people have found their life partner</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
