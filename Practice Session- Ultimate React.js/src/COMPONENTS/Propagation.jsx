import React from "react";

const Propagation = () => {
  const handleParent = (event) => {
    console.log("Parent Event: ", event);
  };

  const handleChild = (event) => {
    event.stopPropagation();
    console.log("Child Event: ", event);
  };
  return (
    <>
      <div onClick={handleParent}>
        <h1>I'm Parent</h1>

        <button onClick={handleChild}> I'm Child</button>
      </div>
    </>
  );
};

export default Propagation;
