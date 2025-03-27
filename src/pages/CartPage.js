// src/pages/CartPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/CartPage.css';

function CartPage() {
  // Initialize with empty cart
  const [cartItems, setCartItems] = useState([]);
  
  const [subtotal, setSubtotal] = useState(0);
  
  useEffect(() => {
    document.title = 'Shopping Cart - BeadUnited';
    
    // Calculate subtotal
    const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setSubtotal(total);
  }, [cartItems]);
  
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  // For demonstration purposes only - this would normally come from a cart service or context
  const addDemoItems = () => {
    setCartItems([
      {
        id: 1,
        name: 'Colorful Glass Beads Mix',
        price: 14.99,
        quantity: 2,
        image: '/beads.png'
      },
      {
        id: 2,
        name: 'Crystal Pendant Collection',
        price: 19.99,
        quantity: 1,
        image: '/chain.png'
      }
    ]);
  };
  
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      
      {cartItems.length > 0 ? (
        <div className="cart-container">
          <div className="cart-items">
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(item => (
                  <tr key={item.id}>
                    <td className="product-cell">
                      <img src={item.image} alt={item.name} className="cart-product-image" />
                      <div className="product-info">
                        <span className="product-name">{item.name}</span>
                      </div>
                    </td>
                    <td className="price-cell">${item.price.toFixed(2)}</td>
                    <td className="quantity-cell">
                      <div className="quantity-controls">
                        <button 
                          className="quantity-btn" 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button 
                          className="quantity-btn" 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="total-cell">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="action-cell">
                      <button className="remove-btn" onClick={() => removeItem(item.id)}>
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button className="checkout-btn">Proceed to Checkout</button>
            <Link to="/products" className="continue-shopping">Continue Shopping</Link>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <p>Your shopping cart is empty</p>
          <p className="empty-cart-message">
            Browse our collections and discover our premium beads and jewelry supplies.
          </p>
          <div className="empty-cart-buttons">
            <Link to="/products" className="continue-shopping">Start Shopping</Link>
            {/* Demo button - for development only */}
            <button onClick={addDemoItems} className="demo-btn">Demo: Add Items</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;