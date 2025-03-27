// src/pages/ProductsPage.js
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function ProductsPage() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [pageTitle, setPageTitle] = useState('All Products');

  useEffect(() => {
    // Update page title based on category
    if (category) {
      const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);
      setPageTitle(`${formattedCategory} Products`);
      document.title = `${formattedCategory} - BeadUnited`;
    } else {
      setPageTitle('All Products');
      document.title = 'Products - BeadUnited';
    }
  }, [category]);

  return (
    <div className="page-container">
      <div className="page-header">
        <h1>{pageTitle}</h1>
        {category && <p>Browse our selection of {category} products</p>}
      </div>
      
      <div className="products-container">
        <p>Product listings will be displayed here.</p>
        {/* Product Grid would go here */}
      </div>
    </div>
  );
}

export default ProductsPage;