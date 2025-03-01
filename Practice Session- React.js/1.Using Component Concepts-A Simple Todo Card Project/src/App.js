import React from "react";
import CARD from "./COMPONENTS/CARD";

export default function App() {
  return (
    <div>
      <h1 className="universalHeader"> Todo Card </h1>
      <div className="cardContainer">
        <CARD />
        <CARD />
        <CARD />
      </div>
    </div>
  );
}
