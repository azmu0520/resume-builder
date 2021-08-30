import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt='' />
      </Logo>
      <NavLinks>
        <ul>
          <li>Model S</li>
          <li>Model 3</li>
          <li>Model X</li>
          <li>Model Y</li>
          <li>Solar Roof</li>
          <li>Solar Panels</li>
        </ul>
      </NavLinks>
      <RightBar>
        <ul>
          <li>Shop</li>
          <li>Account</li>
          <li>Panel</li>
        </ul>
      </RightBar>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10vh;
  background-color: red;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  img {
    width: 200px;
    margin-top: -15px;
  }
`;
const NavLinks = styled.div`
  ul li {
    list-style: none;
    display: inline-block;
    margin-right: 25px;
  }
`;
const RightBar = styled.div`
  ul li {
    list-style: none;
    display: inline-block;
    margin-right: 25px;
  }
`;
