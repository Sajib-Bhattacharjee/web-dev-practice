import React, { useState, useEffect } from "react";

function useEffectHookExample() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("This is useEffectHook.");
  }, [count]);
  return (
    <div>
      {console.log("Rendering.")};<h1> Count: {count} </h1>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        {" "}
        +{" "}
      </button>
      <button
        onClick={() => {
          setIsLoading(!isLoading);
        }}
      >
        isLoading
      </button>
    </div>
  );
}

export default useEffectHookExample;
