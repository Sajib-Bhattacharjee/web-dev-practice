import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../services/actions/counterAction";
const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incrementCounter());
  };

  const handleDecrement = () => {
    dispatch(decrementCounter());
  };

  const handleReset = () => {
    dispatch(resetCounter());
  };
  return (
    <div>
      <h3> Counter App </h3>
      <p>
        <h4> Count: {count} </h4>
        <button onClick={handleIncrement}> Increment</button>
        <button onClick={handleDecrement}> Decrement</button>
        <button onClick={handleReset}> Reset</button>
      </p>
    </div>
  );
};

export default Counter;
