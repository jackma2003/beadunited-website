import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaPinterest, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 50px 0 20px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 30px;
    height: 2px;
    background-color: #e83e8c;
    margin-top: 10px;
  }
`;

const FooterLink = styled(Link)`
  color: #ccc;
  margin-bottom: 10px;
  transition: color 0.3s;
  
  &:hover {
    color: #e83e8c;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  font-size: 1.5rem;
  margin-top: 10px;
`;

const SocialIcon = styled.a`
  color: #fff;
  transition: color 0.3s;
  
  &:hover {
    color: #e83e8c;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  margin-top: 15px;
`;

const NewsletterInput = styled.input`
  padding: 10px;
  border: none;
  flex-grow: 1;
  border-radius: 4px 0 0 4px;
`;

const NewsletterButton = styled.button`
  background-color: #e83e8c;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 0 4px 4px 0;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #555;
  color: #aaa;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>BeadUnited</FooterTitle>
          <p style={{ color: '#ccc', marginBottom: '20px' }}>
            Quality beads and jewelry supplies for all your creative needs.
          </p>
          <SocialIcons>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
              <FaPinterest />
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Shop</FooterTitle>
          <FooterLink to="/products?category=glass">Glass Beads</FooterLink>
          <FooterLink to="/products?category=stone">Stone Beads</FooterLink>
          <FooterLink to="/products?category=findings">Findings</FooterLink>
          <FooterLink to="/products?category=chains">Chains</FooterLink>
          <FooterLink to="/products?category=accessories">Accessories</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Information</FooterTitle>
          <FooterLink to="/about">About Us</FooterLink>
          <FooterLink to="/shipping">Shipping Policy</FooterLink>
          <FooterLink to="/returns">Returns & Refunds</FooterLink>
          <FooterLink to="/privacy">Privacy Policy</FooterLink>
          <FooterLink to="/terms">Terms & Conditions</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Newsletter</FooterTitle>
          <p style={{ color: '#ccc', marginBottom: '20px' }}>
            Subscribe to receive updates on new products and special offers.
          </p>
          <NewsletterForm>
            <NewsletterInput type="email" placeholder="Your Email" />
            <NewsletterButton><FaEnvelope /></NewsletterButton>
          </NewsletterForm>
        </FooterColumn>
      </FooterContent>
      
      <Copyright>
        &copy; {new Date().getFullYear()} BeadUnited. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;