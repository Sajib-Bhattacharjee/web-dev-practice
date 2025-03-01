import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = (event) => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = (event) => {
    setCount((prevCount) => prevCount - 1);
  };

  const handleReset = (event) => {
    setCount(0);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button disabled={count === 0 ? true : false} onClick={handleDecrement}>
        Decrement
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
