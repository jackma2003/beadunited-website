// src/pages/AboutPage.js
import React, { useEffect } from 'react';
import '../styles/AboutPage.css'; // Import the CSS file

function AboutPage() {
  useEffect(() => {
    document.title = 'About Us - BeadUnited';
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>About BeadUnited</h1>
      </div>
      
      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            BeadUnited was founded in 2025 with a simple mission: to provide high-quality beading supplies 
            to jewelry makers around the world. What started as a small family business has grown into a 
            trusted name in the craft community.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Our Promise</h2>
          <p>
            We believe in exceptional quality, fair pricing, and outstanding customer service. Every product 
            in our collection is carefully selected and quality tested to ensure you receive only the best 
            materials for your creative projects.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Meet Our Team</h2>
          <p>
            Our team consists of passionate crafters and jewelry makers who understand your needs and are 
            dedicated to helping you bring your creative vision to life.
          </p>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;