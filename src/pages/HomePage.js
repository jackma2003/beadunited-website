// src/pages/HomePage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log('Searching for:', searchQuery);
  };

  return (
    <>
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <div className="hero-bottom-left">
            <h1>Craft Your Perfect Design</h1>
            <p>Discover our premium collection of handcrafted beads and jewelry supplies. From glass to gemstones, we have everything you need to bring your creative vision to life.</p>
            <Link to="/products?category=women" className="cta-button">Shop the Women's Collection</Link>
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
        <div className="collection-header">
          <h2 className="collection-title">FEATURED PRODUCTS</h2>
        </div>
        <div className="product-grid">
          {/* Product 1 */}
          <div className="product-card">
            <div className="product-image">
              <img src="/beads.png" alt="Colorful Glass Beads" />
            </div>
            <div className="product-info">
              <h3 className="product-name">Colorful Glass Beads Mix</h3>
              <p className="product-price">$14.99</p>
              <Link to="/products?category=women" className="product-link">SHOP THE WOMEN'S COLLECTION</Link>
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
              <Link to="/products?category=women" className="product-link">SHOP THE WOMEN'S COLLECTION</Link>
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
              <Link to="/products?category=women" className="product-link">SHOP THE WOMEN'S COLLECTION</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="category-section">
        <div className="collection-header">
          <h2 className="collection-title">SHOP BY CATEGORY</h2>
        </div>
        <div className="category-grid">
          {/* Category 1 */}
          <div className="category-card">
            <img src="/beads.png" alt="Glass Beads" className="category-image" />
            <div className="category-info">
              <h3 className="category-name">Beads</h3>
              <Link to="/products?category=beads" className="product-link">SHOP THE WOMEN'S COLLECTION</Link>
            </div>
          </div>

          {/* Category 2 */}
          <div className="category-card">
            <img src="/chain.png" alt="Stone Beads" className="category-image" />
            <div className="category-info">
              <h3 className="category-name">Chains</h3>
              <Link to="/products?category=chains" className="product-link">SHOP THE WOMEN'S COLLECTION</Link>
            </div>
          </div>

          {/* Category 3 */}
          <div className="category-card">
            <img src="/findings.png" alt="Metal Findings" className="category-image" />
            <div className="category-info">
              <h3 className="category-name">Findings</h3>
              <Link to="/products?category=findings" className="product-link">SHOP THE WOMEN'S COLLECTION</Link>
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
    </>
  );
}

export default HomePage;