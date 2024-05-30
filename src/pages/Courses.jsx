import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import { Styledlinks } from "./Menu";

const Courses = () => {
  return (
    <StyledContainer>
      <StyledNav>
        <StyledLink to="/courses/materials">Materials</StyledLink>
        <StyledLink to="/courses/students">students</StyledLink>
        <StyledLink to="/courses/ratings">ratings</StyledLink>
      </StyledNav>

      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </StyledContainer>
  );
};

export default Courses;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const StyledContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

const StyledLink = styled(Styledlinks)`
  color: black;
`;

const OutletWrapper = styled.div`
  background-color: #2c42b0;
  padding: 20px;
  width: 600px;
  height: 400px;
`;
