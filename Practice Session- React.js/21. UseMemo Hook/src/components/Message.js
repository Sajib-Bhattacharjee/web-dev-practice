import React, { memo, useMemo } from "react";

const Message = ({ numberOfMessage, onHandleIncrement }) => {
  console.log("Message Rendering...");

  const calculatedNumber = useMemo(() => {
    let number = 0;
    for (let index = 0; index < 5000000000; index++) {
      number++;
    }
    return number;
  }, []);

  return (
    <div>
      <h2> {calculatedNumber} </h2>
      <p> Number of message: {numberOfMessage}</p>
      <button onClick={onHandleIncrement}> Handle Increment Message </button>
    </div>
  );
};

export default memo(Message);
