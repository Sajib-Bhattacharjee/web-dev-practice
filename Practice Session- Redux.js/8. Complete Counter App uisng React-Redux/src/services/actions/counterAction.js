import { DECREMENT, INCREMENT, RESET } from "../Constant/counterConstant";

export const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};
export const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

export const resetCounter = () => {
  return {
    type: RESET,
  };
};
