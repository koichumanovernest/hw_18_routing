import React from "react";
import Button from "../components/Button";
import { store, calculatorTypes } from "../store/Store";
import { useDispatch, useSelector } from "react-redux";

const Notifications = () => {
  const {result} = useSelector((state) => state)

  const dispatch = useDispatch()


  const plus = () => {
    dispatch({ type: calculatorTypes.PLUS, payload: 10 });
  };

  const divide = () => {
    dispatch({ type: calculatorTypes.DIVIDE, payload: 2 });
  };

  const multiply = () => {
    dispatch({ type: calculatorTypes.MULTIPLY, payload: 5 });
  };

  const minus = () => {
    dispatch({ type: calculatorTypes.MINUS, payload: 7 });
  };

  return (
    <div>
      <h1>Notifications page</h1>

      <Button onClick={plus}>PLus 10</Button>
      <Button onClick={multiply}>Multiply 2</Button>
      <Button onClick={divide}>divide 10</Button>
      <Button onClick={minus}>minus 7</Button>
    </div>
  );
};

export default Notifications;
