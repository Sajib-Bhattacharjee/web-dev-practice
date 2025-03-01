import React, { useState } from "react";

export default function HOOKS_USESTATE() {
  const [count, setCount] = useState(0);

  const handleOnclick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1> Count: {count}</h1>
      <button onClick={handleOnclick}> Increment </button>
    </div>
  );
}
