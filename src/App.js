// src/App.js
import React, { useState } from 'react';
import './styles/App.css';
import { FaShoppingCart, FaUser, FaSearch, FaFacebook, FaInstagram, FaPinterest, FaEnvelope } from 'react-icons/fa';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [liveText, setLiveText] = useState('');
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };
  
  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <div className="logo">BeadUnited</div>
          <nav className="nav">
            <a href="/" className="nav-item">Bead</a>
            <a href="/products" className="nav-item">Finding</a>
            <a href="/products" className="nav-item">Chain</a>
            <a href="/about" className="nav-item">About us</a>
          </nav>
          <div className="nav-icons">
            <a href="/search" className="nav-icon"><FaSearch /></a>
            <a href="/account" className="nav-icon"><FaUser /></a>
            <a href="/cart" className="nav-icon"><FaShoppingCart /></a>
          </div>
        </div>
      </header>
      
      <main>
      <section className="hero">
          <div className="hero-overlay"></div>
          <div className="hero-content fade-in">
            <h1>Craft Your Perfect Design</h1>
            <p>Discover our premium collection of handcrafted beads and jewelry supplies. From glass to gemstones, we have everything you need to bring your creative vision to life.</p>
            <button className="cta-button">Explore Collection</button>
            
            {/* Live Text Box inside hero */}
            <div className="hero-live-text-box">
              <h3>What's on your mind?</h3>
              <textarea 
                value={liveText}
                onChange={(e) => setLiveText(e.target.value)}
                placeholder="Share your thoughts or what you're looking for..."
                className="live-text-input"
              />
            </div>
          </div>
        </section>

        {/* Search Bar Section */}
        <section className="search-section">
          <div className="container">
            <div className="search-container">
              <h3>Find Exactly What You Need</h3>
              <form onSubmit={handleSearchSubmit} className="search-form">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for beads, findings, chains..."
                  className="search-input"
                />
                <button type="submit" className="search-button">
                  <FaSearch /> Search
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="featured-section">
          <h2 className="section-title">Featured Products</h2>
          <div className="product-grid">
            {/* Product 1 */}
            <div className="product-card">
              <div className="product-image">
                <img src="/beads.png" alt="Colorful Glass Beads" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Colorful Glass Beads Mix</h3>
                <p className="product-price">$14.99</p>
                <button className="product-button">Add to Cart</button>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card">
              <div className="product-image">
                <img src="/chain.png" alt="Crystal Pendant" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Crystal Pendant Collection</h3>
                <p className="product-price">$19.99</p>
                <button className="product-button">Add to Cart</button>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card">
              <div className="product-image">
                <img src="/findings.png" alt="Silver Findings" />
              </div>
              <div className="product-info">
                <h3 className="product-name">Silver Findings Set</h3>
                <p className="product-price">$24.99</p>
                <button className="product-button">Add to Cart</button>
              </div>
            </div>
          </div>
        </section>

        <section className="category-section">
          <h2 className="section-title">Shop by Category</h2>
          <div className="category-grid">
            {/* Category 1 */}
            <div className="category-card">
              <img src="https://via.placeholder.com/400x300" alt="Glass Beads" className="category-image" />
              <div className="category-overlay">
                <h3 className="category-name">Glass</h3>
                <button className="category-button">Shop Now</button>
              </div>
            </div>

            {/* Category 2 */}
            <div className="category-card">
              <img src="https://via.placeholder.com/400x300" alt="Stone Beads" className="category-image" />
              <div className="category-overlay">
                <h3 className="category-name">Stone</h3>
                <button className="category-button">Shop Now</button>
              </div>
            </div>

            {/* Category 3 */}
            <div className="category-card">
              <img src="https://via.placeholder.com/400x300" alt="Metal Findings" className="category-image" />
              <div className="category-overlay">
                <h3 className="category-name">Metal</h3>
                <button className="category-button">Shop Now</button>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-section">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonial-container">
            <p className="testimonial-quote">
              "BeadUnited has transformed my jewelry making experience! Their beads are of exceptional quality, and the variety allows me to create unique pieces every time. The customer service is outstanding - they're always ready to help with design ideas!"
            </p>
            <p className="testimonial-author">— Emma Thompson, Jewelry Designer</p>
          </div>
        </section>
      </main>
      
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-column">
            <h3>BeadUnited</h3>
            <p>Quality beads and jewelry supplies for all your creative needs.</p>
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebook /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaPinterest /></a>
            </div>
          </div>
          
          <div className="footer-column">
            <h3>Shop</h3>
            <a href="#" className="footer-link">Glass Beads</a>
            <a href="#" className="footer-link">Stone Beads</a>
            <a href="#" className="footer-link">Findings</a>
            <a href="#" className="footer-link">Chains</a>
            <a href="#" className="footer-link">Accessories</a>
          </div>
          
          <div className="footer-column">
            <h3>Information</h3>
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Shipping Policy</a>
            <a href="#" className="footer-link">Returns & Refunds</a>
            <a href="#" className="footer-link">Privacy Policy</a>
            <a href="#" className="footer-link">Terms & Conditions</a>
          </div>
          
          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>Subscribe to receive updates on new products and special offers.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your Email" className="newsletter-input" />
              <button className="newsletter-button"><FaEnvelope /></button>
            </div>
          </div>
        </div>
        
        <div className="copyright">
          &copy; {new Date().getFullYear()} BeadUnited. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;