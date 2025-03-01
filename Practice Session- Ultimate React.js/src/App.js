// import React from "react";
// import Counter from "./COMPONENTS/Counter";

// const App = () => {
//   return (
//     <>
//       <Counter />
//     </>
//   );
// };

// export default App;

// import React from "react";
// import Propagation from "./COMPONENTS/Propagation";

// const App = () => {
//   return (
//     <>
//       <Propagation />
//     </>
//   );
// };

// export default App;

// import React from "react";
// import FormControl from "./COMPONENTS/FormControl";

// const App = () => {
//   return (
//     <>
//       <FormControl />
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { Child } from "./COMPONENTS/Child";

// const App = () => {
//   const handleChildData = (childData) => {
//     console.log(childData);
//   };

//   return (
//     <>
//       <Child onChildData={handleChildData} />
//     </>
//   );
// };

// export default App;

// import React from "react";
// import Home from "./COMPONENTS/Home";

// const App = () => {
//   return (
//     <>
//       <Home />
//     </>
//   );
// };

// export default App;

// import React from "react";
// import DataFetch from "./COMPONENTS/DataFetch";

// const App = () => {
//   return (
//     <>
//       <DataFetch />
//     </>
//   );
// };

// export default App;
// import React from "react";
// import DynamicStyling from "./COMPONENTS/DynamicStyling";

// const App = () => {
//   return (
//     <>
//       <DynamicStyling />
//     </>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import Component1 from "./COMPONENTS/PROP__DRILLING/Component1";

// import { UserContext } from "./COMPONENTS/PROP__DRILLING/UserContext";

// const App = () => {
//   const [user, setUser] = useState({
//     name: "Sajib Bhattacharjee",
//     id: 20201070010,
//   });

//   const [text, setText] = useState({
//     id: 202011,
//     name: "The Befief History of Time",
//     author: "Stephen Hawking",
//   });

//   return (
//     <>
//       <UserContext.Provider value={{ user, text }}>
//         <Component1 />
//       </UserContext.Provider>
//     </>
//   );
// };

// export default App;

// import React from "react";
// import UseMemo from "./COMPONENTS/UseMemo";

// const App = () => {
//   return (
//     <>
//       <UseMemo />
//     </>
//   );
// };

// export default App;
// import React from "react";
// import MyApp from "./COMPONENTS/TestingReact";

// const App = () => {
//   return (
//     <div>
//       <MyApp />
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import CompleteTodo from "./COMPONENTS/PROJECTS/CompleteTodo";

// const App = () => {
//   return (
//     <>
//       <CompleteTodo />
//     </>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import SearchBar from "./COMPONENTS/CountryApp/SearchBar";
// import CountryList from "./COMPONENTS/CountryApp/CountryList";

// function App() {
//   const [countries, setCountries] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://restcountries.com/v3.1/all")
//       .then((response) => {
//         setCountries(response.data);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   const filteredCountries = countries.filter((country) =>
//     country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div>
//       <h1>Country Search</h1>
//       <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
//       <CountryList countries={filteredCountries} />
//     </div>
//   );
// }

// export default App;

import React from "react";
import FAQ from "./COMPONENTS/PROJECTS/FAQ";

const App = () => {
  return (
    <div className="App">
      <FAQ />
    </div>
  );
};

export default App;
