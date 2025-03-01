import React, { memo } from "react";

const Message = ({ numberOfMessage, onHandleIncrement }) => {
  console.log("Message Rendering...");
  return (
    <div>
      <p> Number of message: {numberOfMessage}</p>
      <button onClick={onHandleIncrement}> Handle Increment Message </button>
    </div>
  );
};

export default memo(Message);
