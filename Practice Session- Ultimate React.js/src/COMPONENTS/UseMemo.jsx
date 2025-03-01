import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const memoResust = useMemo(() => {
    let number = 0;

    for (let index = 0; index < 500000000; index++) {
      number++;
    }
    return number;
  }, []);

  return (
    <>
      <h1>{memoResust}</h1>

      <h2>Count: {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};

export default UseMemo;
