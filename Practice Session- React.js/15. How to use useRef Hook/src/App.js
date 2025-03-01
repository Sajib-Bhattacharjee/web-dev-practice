// import React from "react";
// import CARD from "./COMPONENTS/CARD";
// import Data from "./data.json";

// export default function App() {
//   return (
//     <div>
//       <h1 className="universalHeader"> Todo Card </h1>
//       <div className="cardContainer">
//         {Data.map((item, index) => (
//           <CARD
//             key={index}
//             cardTitle={item.cardTitle}
//             cardBody={item.cardBody}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// // React Icon Section Starts Here

// import React from "react";
// import REACT_ICON from "./REACT_ICONS/REACT_ICON";

// export default function App() {
//   return (
//     <div>
//       <REACT_ICON />
//     </div>
//   );
// }

// React Icon Section Ends Here

//React__Bootstrap Section Starts Here

// import React from "react";
// import REACTBOOTSTRAP from "./REACT_BOOTSTRAP/REACTBOOTSTRAP";

// export default function App() {
//   return (
//     <div>
//       <REACTBOOTSTRAP />;
//     </div>
//   );
// }

//React__Bootstrap Section Ends Here

// Starte , setState , eventHandler Section Starts Here

// import React from "react";

// import STATE from "./STATES/STATE";

// export default function App() {
//   return (
//     <div>
//       <STATE />
//     </div>
//   );
// }

// Starte , setState , eventHandler Section Ends Here

// Conditional Rendering Section Starts Here
// import React from "react";

// import CONDITIONAL_RENDERING from "./CONDITIONAL_RENDERING";

// export default function App() {
//   return (
//     <div>
//       <CONDITIONAL_RENDERING />
//     </div>
//   );
// }

// Conditional Rendering Section Ends Here

// Event Handler Class Starts Here

// import React, { Component } from "react";
// import EVENT_HNADLER_CLASS from "./EVENT_HNADLER_CLASS";

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <EVENT_HNADLER_CLASS />
//       </div>
//     );
//   }
// }

// Event Handler Class Ends Here

// Starting useState Hook Here
// import React from "react";
// import HOOKS_USESTATE from "./HOOKS_USESTATE";

// export default function App() {
//   return (
//     <div>
//       <HOOKS_USESTATE />
//     </div>
//   );
// }

// Ending useState Hook Here

// Passing Data Child to Parent Components Section Starts here

// import React from "react";
// import Child from "./PASSING_DATA/Child";

// export default function App() {
//   const data = "I'm data From Parent.....";
//   const handleChildData = (childData) => {
//     console.log(childData);
//   };
//   return (
//     <div>
//       <Child parentData={data} onChildData={handleChildData} />
//     </div>
//   );
// }

// Passing Data Child to Parent Components Section Ends here

// Data Toggle Section Starts Here

// import React from "react";
// import Toggle from "./Toggle/Toggle";

// const App = () => {
//   return (
//     <div>
//       <Toggle />
//     </div>
//   );
// };

// export default App;
// Data Toggle Section Ends Here

// FAQs Section Starts Here

// import React from "react";
// import FAQS from "./FAQS/FAQS";

// const App = () => {
//   return (
//     <div>
//       <FAQS />
//     </div>
//   );
// };

// export default App;
// FAQs Section Ends Here

// useEffect Hooks Starts Here

// import React from "react";
// import UseEffectHookExample from "./USE_EFFECTHOOK/useEffectHookExample";

// function App() {
//   return (
//     <div>
//       <UseEffectHookExample />
//     </div>
//   );
// }

// export default App;
// useEffect Hooks Ends Here

// Form Data Control Section Starts Here

// import React from "react";
// import FORM_DATA_CONTROL from "./FORM_DATA_CONTROL/index1";

// function App() {
//   return (
//     <div>
//       <FORM_DATA_CONTROL />
//     </div>
//   );
// }

// export default App;
// Form Data Control Section Ends Here

// Formik Data Control Section Starts Here
// import React from "react";
// import ControlFormik from "./FORM_DATA_CONTROL/ControlFormik";

// function App() {
//   return (
//     <div>
//       <ControlFormik />
//     </div>
//   );
// }

// export default App;
// Formik Data Control Section Ends Here

//Fetch Data using useEffect Hooks Section Starts Here
// import React from "react";
// import FetchData1 from "./USE_EFFECTHOOK/FetchData1";

// function App() {
//   return (
//     <div>
//       <FetchData1 />
//     </div>
//   );
// }

// export default App;
//Fetch Data using useEffect Hooks Section Ends Here

// How to use useRefHook(Starts Here)
import React from "react";

import USERFORM from "./useRef/index";
const App = () => {
  return (
    <div>
      <USERFORM />
    </div>
  );
};

export default App;
// How to use useRefHook(Ends Here)
