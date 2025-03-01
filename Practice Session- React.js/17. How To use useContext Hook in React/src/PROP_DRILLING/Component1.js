import React, { useState } from "react";
import Component2 from "./Component2";
import { UserContext } from "./UseContext";

const Component1 = () => {
  const [user, setUser] = useState({
    name: "Sajib Bhattacharjee",
    id: 70,
  });

  const [dear, setDear] = useState({
    name: "Fatema Zahan Shayla",
    id: 59,
  });
  return (
    <div>
      <UserContext.Provider value={{ user, dear }}>
        <Component2 />
      </UserContext.Provider>
    </div>
  );
};

export default Component1;
