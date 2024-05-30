import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  const count = useSelector((state) => state.result);

  return (
    <Container>
      {/* <h1>count {count}</h1> */}
      <StyledNav>
        <Styledlinks to="/courses"> courses</Styledlinks>
        <Styledlinks to="/announcements"> announcements</Styledlinks>
        <Styledlinks to="/notifications"> notifications</Styledlinks>
        <Styledlinks to="/schedule"> schedule</Styledlinks>
      </StyledNav>

      <StyledOutlet>
        <Outlet />
      </StyledOutlet>
    </Container>
  );
};

export default Menu;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: #2c42b0;
  width: 240px;
  height: 650px;
  padding: 15px;
`;

const Container = styled.div`
  display: flex;
  background-color: #121e7ba4;
  flex-direction: row;
  gap: 100px;
  min-height: 650px;
  margin: auto;
`;

export const Styledlinks = styled(NavLink)`
  text-decoration: none;
  padding: 5px;
  font-size: 22px;
  color: yellow;
  text-transform: uppercase;
  font-family: Arial, Helvetica, sans-serif;
  border-radius: 10px;
`;

const StyledOutlet = styled.div`
  padding: 20px;
`;
