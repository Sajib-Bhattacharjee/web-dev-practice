import React, { memo } from "react";

const Message = ({ numberOfMessage }) => {
  console.log("Message Rendering...");
  return (
    <div>
      <p> Number of message: {numberOfMessage}</p>
    </div>
  );
};

export default memo(Message);
