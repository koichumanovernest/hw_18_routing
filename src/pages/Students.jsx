import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Students = () => {
  const navigate = useNavigate();

  const navToDetails1 = () => {
    navigate("/courses/students/details/1");
  };

  const navToDetails2 = () => {
    navigate("/courses/students/details/2");
  };

  return (
    <div>
      <div>
        <h2>Student 1</h2>
        <Button onClick={navToDetails1}>Details</Button>
      </div>

      <div>
        <h2>Student 2</h2>
        <Button onClick={navToDetails2}>Details</Button>
      </div>

    </div>
  );
};

export default Students;
