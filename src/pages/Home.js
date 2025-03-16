import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProduct';
import CategorySection from '../components/CategorySection';

const TestimonialSection = styled.section`
  padding: 60px 0;
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialTitle = styled.h2`
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

const TestimonialContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f8f8f8;
  border-radius: 8px;
`;

const Quote = styled.blockquote`
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 20px;
`;

const Author = styled.p`
  font-weight: bold;
`;

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <CategorySection />
      
      <TestimonialSection>
        <TestimonialTitle>What Our Customers Say</TestimonialTitle>
        <TestimonialContainer>
          <Quote>
            "I love the quality of beads from BeadUnited. Their selection is amazing
            and my jewelry pieces always turn out beautiful when I use their supplies!"
          </Quote>
          <Author>— Sarah Johnson, Jewelry Designer</Author>
        </TestimonialContainer>
      </TestimonialSection>
    </main>
  );
};

export default Home;