import React, { useContext } from "react";
import { UserContext } from "./UseContext";

const Component4 = () => {
  const { user, dear } = useContext(UserContext);

  return (
    <div>
      <h3> {user.name} </h3>
      <h3> {user.id} </h3>
      <h2>{dear.name}</h2>
      <h2>{dear.id}</h2>
    </div>
  );
};

export default Component4;
