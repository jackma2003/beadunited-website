import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaUser, FaShoppingCart, FaSearch } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: #f8f8f8;
  padding: 15px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  
  img {
    height: 40px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

const NavItem = styled(Link)`
  font-weight: 500;
  transition: color 0.3s;
  
  &:hover {
    color: #e83e8c;
  }
`;

const IconsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const IconLink = styled(Link)`
  font-size: 20px;
  transition: color 0.3s;
  
  &:hover {
    color: #e83e8c;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <Link to="/">
            <img src="/images/logo.png" alt="BeadUnited" />
          </Link>
        </Logo>
        
        <Nav>
          <NavItem to="/">Bead</NavItem>
          <NavItem to="/products">Finding</NavItem>
          <NavItem to="/products">Chain</NavItem>
          <NavItem to="/about">About us</NavItem>
        </Nav>
        
        <IconsContainer>
          <IconLink to="/search"><FaSearch /></IconLink>
          <IconLink to="/signin"><FaUser /></IconLink>
          <IconLink to="/cart"><FaShoppingCart /></IconLink>
        </IconsContainer>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;