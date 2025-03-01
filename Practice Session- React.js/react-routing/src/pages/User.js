import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const User = () => {
  //   const { userId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ name: name, age: age });
  };

  return (
    <div>
      {/* <h1> {userId} </h1> */}
      {/* <h1>My ID is {searchParams.get("id")} </h1>
      <h1>I'm Now {searchParams.get("age")} </h1>
      <h1>I'm Mr. {searchParams.get("name")} </h1> */}

      <div className="center">
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
          <div style={{ margin: "10px" }}>
            <input
              type="text"
              value={name}
              placeholder="name here"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div style={{ margin: "10px" }}>
            <input
              type="text"
              value={age}
              placeholder="age here"
              onChange={(e) => {
                setAge(e.target.value);
              }}
            />
          </div>
          <button type="submit"> Add</button>
        </form>
      </div>
    </div>
  );
};

export default User;
