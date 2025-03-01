import React from "react";
import CARD from "./COMPONENTS/CARD";

export default function App() {
  return (
    <div>
      <h1 className="universalHeader"> Todo Card </h1>
      <div className="cardContainer">
        <CARD
          cardTitle="Web-Application"
          cardBody="Sanctus et ipsum sed gubergren justo consetetur. Eos tempor dolor lorem sadipscing gubergren sit accusam lorem invidunt. Tempor stet rebum."
        />
        <CARD
          cardTitle="Console-Application"
          cardBody="Sanctus et ipsum sed gubergren justo consetetur. Eos tempor dolor lorem sadipscing gubergren sit accusam lorem invidunt. Tempor stet rebum."
        />
        <CARD
          cardTitle="AI-Application"
          cardBody="Sanctus et ipsum sed gubergren justo consetetur. Eos tempor dolor lorem sadipscing gubergren sit accusam lorem invidunt. Tempor stet rebum."
        />
      </div>
    </div>
  );
}
