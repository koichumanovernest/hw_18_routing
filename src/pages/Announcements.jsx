import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../components/Button";

const Announcements = () => {
  const navigate = useNavigate();

  const navToStudentsPage = () => {
    navigate("/courses/students");
  };

  return (
    <StyledContainer>
      <h1>Announcement page</h1>
      <Button onClick={navToStudentsPage}>Go to Students page</Button>
    </StyledContainer>
  );
};

export default Announcements;


const StyledContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
`;

