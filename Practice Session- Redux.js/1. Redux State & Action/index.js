// Redux importes
const { createStore } = require("redux");

// All Constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESST";

// State
const initialCounterState = {
  count: 0,
};
// Action
const actionCounterIncrement = () => {
  return {
    type: INCREMENT,
  };
};
// Action
const actionCounterDecrement = () => {
  return {
    type: DECREMENT,
  };
};
// Action
const actionCounterReset = () => {
  return {
    type: RESET,
  };
};
