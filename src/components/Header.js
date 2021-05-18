import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src="/images/logo.svg" />
      </Link>

      <Menu>
        <LinkWrap>
          <Link to="/">Model S </Link>
        </LinkWrap>

        <LinkWrap>
          <Link to="/">Model 3</Link>
        </LinkWrap>
        <LinkWrap>
          <Link to="/">Model Y </Link>
        </LinkWrap>
        <LinkWrap>
          <Link to="/">Model X</Link>
        </LinkWrap>
        <LinkWrap>
          <Link to="/">Solar Roof</Link>
        </LinkWrap>
        <LinkWrap>
          <Link to="/">Solar Panels</Link>
        </LinkWrap>
      </Menu>
      <RightMenu>
        <LinkWrap>
          <Link to="/">Shop</Link>
        </LinkWrap>
        <LinkWrap>
          <Link to="/">Tesla Account</Link>
        </LinkWrap>
        <CustomMenu />
      </RightMenu>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    display: none;
  } ;
`;

const LinkWrap = styled.div`
  font-weight: 600;
  text-transform: uppercase;
  flex-wrap: nowrap;
  padding: 0 20px;
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
