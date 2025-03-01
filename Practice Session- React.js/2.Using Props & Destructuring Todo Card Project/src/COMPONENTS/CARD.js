import React from "react";

export default function CARD(props) {
  //const cardTitle = "Web-Application";
  //const cardBody =
  // "Sanctus et ipsum sed gubergren justo consetetur. Eos tempor dolor lorem sadipscing gubergren sit accusam lorem invidunt. Tempor stet rebum.";

  const { cardTitle, cardBody } = props;
  const date = new Date();
  const presentDate = date.getDate();
  const presentMonth = date.getMonth();
  const presentYear = date.getFullYear();

  return (
    <div className="card">
      <h1 className="cardTitle"> {cardTitle}</h1>
      <p className="cardBody">{cardBody}</p>
      <p className="cardFooter">
        {presentDate + "/" + presentMonth + "/" + presentYear}
      </p>
    </div>
  );
}

// import React from "react";

// const cardTitle = "Web-Application";
// const cardBody =
//   "Sanctus et ipsum sed gubergren justo consetetur. Eos tempor dolor lorem sadipscing gubergren sit accusam lorem invidunt. Tempor stet rebum.";

// const date = new Date();
// const presentDate = date.getDate();
// const presentMonth = date.getMonth();
// const presentYear = date.getFullYear();

// function CARD() {
//   return (
//     <div>
//       <h1> {cardTitle}</h1>
//       <p>{cardBody}</p>
//       <p>{presentDate + "/" + presentMonth + "/" + presentYear}</p>
//     </div>
//   );
// }

// export default CARD;
