import { createStore } from "redux";

export const calculatorTypes = {
  PLUS: "PLUS",
  MINUS: "MINUS",
  MULTIPLY: "MULTIPLY",
  DIVIDE: "DIVIDE",
};

const initialState = {
  result: 0,
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case calculatorTypes.PLUS: {
      return { ...state, result: state.result + action.payload };
    }
    case calculatorTypes.MINUS: {
      return { ...state, result: state.result - action.payload };
    }
    case calculatorTypes.MULTIPLY: {
      return { ...state, result: state.result * action.payload };
    }
    case calculatorTypes.DIVIDE: {
      return { ...state, result: state.result / action.payload };
    }

    default: return state
  }
};

export const store = createStore( calculatorReducer);

