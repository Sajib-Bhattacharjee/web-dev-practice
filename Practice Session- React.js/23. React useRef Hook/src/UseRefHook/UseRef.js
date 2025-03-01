import React, { useRef } from "react";

const UseRef = () => {
  const userNameRef = useRef();
  const userPasswordRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Name: " + userNameRef.current.value);
    console.log("Password: " + userPasswordRef.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username"> Name: </label>
        <input type="text" id="username" ref={userNameRef}></input>
        <label htmlFor="password"> Password: </label>
        <input type="password" id="password" ref={userPasswordRef}></input>
      </div>
      <button type="submit"> Registration</button>
    </form>
  );
};

export default UseRef;
