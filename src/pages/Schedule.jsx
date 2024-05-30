import React from 'react'
import Button from '../components/Button'
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Schedule = () => {
    const navigate = useNavigate();

    const navToNotificatonsPage = () => {
      navigate("/notifications");
    };


  return (
    <StyledContainer>
      <h1>Schedule</h1>
<Button onClick={navToNotificatonsPage}>Go to Notifications</Button>
    </StyledContainer>
  )
}

export default Schedule

const StyledContainer = styled.div`
  display: flex;
  gap: 40px;
  flex-direction: column;
`;