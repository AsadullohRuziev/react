import React, { useState } from "react";
import styled from "styled-components";
import { navbar } from "../../utils/navbar";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("/");
  return (
    <Wrapper>
      <Container>
        <LogoWrapper>
          <Logo src={logo} alt="logo" /> GreenShop
        </LogoWrapper>
        <NavLinks>
          {navbar.map((value) => (
            <Link
              onClick={() => setActive(value.path)}
              active={active === value.path}
              to={value.path}>
              {value.title}
            </Link>
          ))}
        </NavLinks>
        <ItemsGroup>
          <h2>Login</h2>
        </ItemsGroup>
      </Container>
      <Outlet />
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: flex;
flex-direction: column;
width: 100%;

`;
const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 78px;
border-bottom: 0.3px solid rgba(70, 163, 88, 0.5);
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--greenColor);
  font-size: 28px;
`;

const Logo = styled("img")`
  width: 55px;
  height: 55px;
  margin-right: 6px;
`;

const NavLinks = styled.div`
  display: flex;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  font-size: 22px;
  line-height: 20px;
  color: ${({ active }) => (active ? "#46A358" : "#3d3d3d")};
  margin: 0 25px;
`;

const ItemsGroup = styled.div`
display: flex;
`;
