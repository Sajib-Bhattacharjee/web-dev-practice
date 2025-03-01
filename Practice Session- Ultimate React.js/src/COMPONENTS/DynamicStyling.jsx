import React from "react";

const DynamicStyling = () => {
  const isLoading = false;

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          color: isLoading ? "green" : "blue",
          backgroundColor: isLoading ? "black" : "yellow",
        }}
      >
        Learnint React JS...
      </h1>
    </>
  );
};

export default DynamicStyling;
