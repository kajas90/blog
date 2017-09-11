import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  margin-left: auto;
  
  & > * {
    margin: 0 10px;
    color: #C0C5D6;
    text-decoration: none;
  }
  
  & > a:hover {
    color: #D1345B;
  }
`

const Menu = ({ children}) => <NavWrapper>{children}</NavWrapper>

export default Menu
