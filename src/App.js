// src/App.js
import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './styles/App.css';
import { FaShoppingCart, FaUser, FaSearch, FaFacebook, FaInstagram, FaPinterest, FaEnvelope } from 'react-icons/fa';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="header-content">
            <div className="logo">
              <Link to="/">BeadUnited</Link>
            </div>
            <nav className="nav">
              <Link to="/products?category=beads" className="nav-item">Bead</Link>
              <Link to="/products?category=finding" className="nav-item">Finding</Link>
              <Link to="/products?category=chain" className="nav-item">Chain</Link>
              <Link to="/about" className="nav-item">About Us</Link>
            </nav>
            <div className="nav-icons">
              <Link to="/search" className="nav-icon"><FaSearch /></Link>
              <Link to="/account" className="nav-icon"><FaUser /></Link>
              <Link to="/cart" className="nav-icon"><FaShoppingCart /></Link>
            </div>
          </div>
        </header>
        
        <main>
          <AppRoutes />
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
              <Link to="/products?category=glass" className="footer-link">Glass Beads</Link>
              <Link to="/products?category=stone" className="footer-link">Stone Beads</Link>
              <Link to="/products?category=findings" className="footer-link">Findings</Link>
              <Link to="/products?category=chains" className="footer-link">Chains</Link>
              <Link to="/products?category=accessories" className="footer-link">Accessories</Link>
            </div>
            
            <div className="footer-column">
              <h3>Information</h3>
              <Link to="/about" className="footer-link">About Us</Link>
              <Link to="/shipping" className="footer-link">Shipping Policy</Link>
              <Link to="/returns" className="footer-link">Returns & Refunds</Link>
              <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              <Link to="/terms" className="footer-link">Terms & Conditions</Link>
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
    </Router>
  );
}

export default App;