import React from "react";
import CARD from "./COMPONENTS/CARD";
import Data from "./data.json";

console.log(Data);

export default function App() {
  return (
    <div>
      <h1 className="universalHeader"> Todo Card </h1>
      <div className="cardContainer">
        {Data.map((item, index) => (
          <CARD
            key={index}
            cardTitle={item.cardTitle}
            cardBody={item.cardBody}
          />
        ))}
      </div>
    </div>
  );
}
