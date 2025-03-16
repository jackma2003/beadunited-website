import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  background-color: #6c757d;
  color: white;
  text-align: center;
  padding: 60px 0;
  margin-bottom: 40px;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 15px;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const HeroText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
`;

const HeroButton = styled.button`
  background-color: white;
  color: #333;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  transition: all 0.3s;
  
  &:hover {
    background-color: #e83e8c;
    color: white;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTitle>Welcome to BeadUnited</HeroTitle>
        <HeroText>
          Discover our handcrafted beads and jewelry supplies for all your creative needs.
          Premium quality materials to bring your designs to life.
        </HeroText>
        <HeroButton>Shop Now</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;