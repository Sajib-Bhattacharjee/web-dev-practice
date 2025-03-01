import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <button onClick={handleClick}>Clicked {count} items</button>
      <button onClick={handleClick}>Clicked {count} items</button>
    </div>
  );
}
