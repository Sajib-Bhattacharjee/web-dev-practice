// import React, { useCallback, useState } from "react";
// import Message from "./components/Message";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [toggle, setToggle] = useState(false);

//   console.log("App Rendering");

//   const handleIncrementMessage = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

//   return (
//     <div>
//       {toggle ? "On" : "Off"}
//       <button onClick={() => setToggle(!toggle)}>Toggle</button>

//       <h2> Count: {count} </h2>
//       <button
//         onClick={() => {
//           setCount((count) => count + 1);
//         }}
//       >
//         {" "}
//         Increment
//       </button>
//       <Message
//         numberOfMessage={count}
//         onHandleIncrement={handleIncrementMessage}
//       />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import UserForm from "./refExample/UserForm";

// const App = () => {
//   return (
//     <div>
//       <UserForm />
//     </div>
//   );
// };

// export default App;

import React from "react";
import UseRef from "./UseRefHook/UseRef";

const App = () => {
  return (
    <div>
      <UseRef />
    </div>
  );
};

export default App;
