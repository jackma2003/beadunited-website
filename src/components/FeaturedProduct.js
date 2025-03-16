import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SectionContainer = styled.section`
  padding: 40px 0;
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 3px;
    background-color: #e83e8c;
    margin: 15px auto 0;
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProductCard = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.div`
  height: 200px;
  background-color: #f8f8f8;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-height: 180px;
    object-fit: contain;
  }
`;

const ProductInfo = styled.div`
  padding: 15px;
`;

const ProductName = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-weight: bold;
  color: #e83e8c;
  margin-bottom: 15px;
`;

const ProductButton = styled.button`
  width: 100%;
  padding: 8px 0;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #e83e8c;
  }
`;

// Sample product data - in a real app, this would come from an API
const sampleProducts = [
  {
    id: 1,
    name: 'Glass Beads Mix',
    price: '$12.99',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    name: 'Crystal Pendant',
    price: '$9.99',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    name: 'Silver Findings Set',
    price: '$15.99',
    image: 'https://via.placeholder.com/150'
  }
];

const FeaturedProducts = () => {
  return (
    <SectionContainer>
      <SectionTitle>Featured Products</SectionTitle>
      <ProductGrid>
        {sampleProducts.map((product) => (
          <ProductCard key={product.id}>
            <Link to={`/product/${product.id}`}>
              <ProductImage>
                <img src={product.image} alt={product.name} />
              </ProductImage>
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}</ProductPrice>
                <ProductButton>Add to Cart</ProductButton>
              </ProductInfo>
            </Link>
          </ProductCard>
        ))}
      </ProductGrid>
    </SectionContainer>
  );
};

export default FeaturedProducts;