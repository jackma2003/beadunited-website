// src/pages/AccountPage.js
import React, { useEffect } from 'react';

function AccountPage() {
  useEffect(() => {
    document.title = 'My Account - BeadUnited';
  }, []);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>My Account</h1>
      </div>
      
      <div className="account-container">
        <div className="login-form">
          <h2>Sign In</h2>
          <form>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            
            <div className="form-actions">
              <button type="submit" className="btn-primary">Sign In</button>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>
          </form>
        </div>
        
        <div className="register-form">
          <h2>Create Account</h2>
          <p>Don't have an account yet? Register to enjoy these benefits:</p>
          <ul>
            <li>Fast checkout process</li>
            <li>Save multiple shipping addresses</li>
            <li>View and track orders</li>
            <li>Earn reward points</li>
          </ul>
          <button className="btn-secondary">Create Account</button>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;