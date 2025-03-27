// src/pages/NotFoundPage.js
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page Not Found - BeadUnited';
  }, []);

  return (
    <div className="page-container not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    </div>
  );
}

export default NotFoundPage;