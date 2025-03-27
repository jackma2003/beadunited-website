// src/pages/SearchPage.js
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [searchResults, setSearchResults] = useState([]);
  
  useEffect(() => {
    document.title = 'Search - BeadUnited';
    
    // If there's a query parameter, perform search
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);
  
  const performSearch = (query) => {
    // This would normally fetch from an API
    // For now, we'll simulate results
    console.log('Searching for:', query);
    
    // Mock search results
    setSearchResults([
      {
        id: 1,
        name: 'Blue Glass Beads',
        price: 12.99,
        image: '/beads.png'
      },
      {
        id: 2,
        name: 'Silver Chain',
        price: 24.99,
        image: '/chain.png'
      },
      {
        id: 3,
        name: 'Gold Findings',
        price: 9.99,
        image: '/findings.png'
      }
    ]);
  };
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
    performSearch(searchQuery);
  };
  
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Search Products</h1>
      </div>
      
      <div className="search-container">
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
      
      {searchResults.length > 0 ? (
        <div className="search-results">
          <h2>Search Results for "{initialQuery}"</h2>
          <div className="product-grid">
            {searchResults.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : initialQuery ? (
        <div className="no-results">
          <p>No results found for "{initialQuery}"</p>
        </div>
      ) : null}
    </div>
  );
}

export default SearchPage;