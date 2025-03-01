import React, { useState } from "react";
import Message from "./components/Message";

const App = () => {
  const [count, setCount] = useState(0);

  console.log("App Rendering");
  return (
    <div>
      <h2> Count: {count} </h2>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        {" "}
        Increment
      </button>
      <Message numberOfMessage={count} />
    </div>
  );
};

export default App;
