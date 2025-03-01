import React, { useContext } from "react";

import { UserContext } from "./UserContext";

const Component4 = () => {
  const { user, text } = useContext(UserContext);

  return (
    <div>
      <h1>{user.id}</h1>
      <p>{user.name}</p>

      <br />
      <h2>{text.id}</h2>
      <p>{text.name}</p>
      <p>{text.author}</p>
    </div>
  );
};

export default Component4;
