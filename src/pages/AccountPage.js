// src/pages/AccountPage.js
import React, { useEffect, useState } from 'react';
import '../styles/AccountPage.css';

function AccountPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = 'My Account - BeadUnited';
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();
    // Handle sign in logic here
    console.log('Signing in with:', email, password);
  };

  const handleCreateAccount = () => {
    // Handle account creation logic or navigation
    console.log('Navigate to account creation page');
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>My Account</h1>
      </div>
      
      <div className="account-container">
        <div className="login-form">
          <h2>Sign In</h2>
          <form onSubmit={handleSignIn}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
            
            <div className="form-actions">
              <button type="submit" className="btn-primary">Sign In</button>
              <a href="#forgot-password" className="forgot-password">Forgot Password?</a>
            </div>
          </form>
        </div>
        
        <div className="register-form">
          <h2>Create Account</h2>
          <p>Don't have an account yet? Register to enjoy these benefits:</p>
          <ul>
            <li>Fast checkout process</li>
            <li>Save multiple shipping addresses</li>
            <li>View and track orders and wish lists</li>
            <li>Access to exclusive discounts and early sales</li>
          </ul>
          <button className="btn-secondary" onClick={handleCreateAccount}>Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;