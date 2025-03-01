import React, { useRef } from "react";

const USERFORM = () => {
  const userNameRef = useRef();
  const userPasswordRef = useRef();

  const handleSubmit = (event) => {
    const userName = userNameRef.current.value;
    const userPassword = userPasswordRef.current.value;
    event.preventDefault();
    console.log("submitted");
    console.log("User Name: " + userName, "Password: " + userPassword);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="userName">User Name: </label>
          <input
            type="text"
            name="userName"
            id="userName"
            ref={userNameRef}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            ref={userPasswordRef}
          ></input>
        </div>

        <button> Submit </button>
      </form>
    </div>
  );
};

export default USERFORM;
