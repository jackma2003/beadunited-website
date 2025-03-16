import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SectionContainer = styled.section`
  padding: 40px 0;
  background-color: #f8f8f8;
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

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
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

const CategoryCard = styled.div`
  position: relative;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
`;

const CategoryOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  color: white;
  text-align: center;
`;

const CategoryName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 5px;
`;

const CategoryButton = styled.button`
  background-color: white;
  color: #333;
  border: none;
  padding: 8px 20px;
  font-size: 0.9rem;
  border-radius: 4px;
  margin-top: 10px;
  transition: all 0.3s;
  
  &:hover {
    background-color: #e83e8c;
    color: white;
  }
`;

// Sample category data
const categories = [
  {
    id: 1,
    name: 'Glass',
    image: 'https://via.placeholder.com/300x200',
    link: '/products?category=glass'
  },
  {
    id: 2,
    name: 'Stone',
    image: 'https://via.placeholder.com/300x200',
    link: '/products?category=stone'
  },
  {
    id: 3,
    name: 'Metal',
    image: 'https://via.placeholder.com/300x200',
    link: '/products?category=metal'
  }
];

const CategorySection = () => {
  return (
    <SectionContainer>
      <SectionTitle>Shop by Category</SectionTitle>
      <CategoryGrid>
        {categories.map((category) => (
          <CategoryCard key={category.id}>
            <CategoryImage src={category.image} alt={category.name} />
            <CategoryOverlay>
              <CategoryName>{category.name}</CategoryName>
              <Link to={category.link}>
                <CategoryButton>Shop Now</CategoryButton>
              </Link>
            </CategoryOverlay>
          </CategoryCard>
        ))}
      </CategoryGrid>
    </SectionContainer>
  );
};

export default CategorySection;