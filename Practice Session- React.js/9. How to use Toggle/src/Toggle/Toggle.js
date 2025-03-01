import React, { useState } from "react";

const Toggle = () => {
  const [toggle, setToggle] = useState(true);
  //  alert(toggle);
  return (
    <div style={{ backgroundColor: "coral", padding: "1rem" }}>
      {toggle && (
        <p>
          Labore ea amet et clita ea tempor. Diam invidunt est et diam
          consetetur no ipsum, ipsum kasd justo lorem ut, tempor nonumy justo
          sanctus labore, magna dolores sea invidunt et.. Labore ea amet et
          clita ea tempor. Diam invidunt est et diam consetetur no ipsum, ipsum
          kasd justo lorem ut, tempor nonumy justo sanctus labore, magna dolores
          sea invidunt et..
        </p>
      )}

      <div style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          style={{ margin: "5px", padding: "4px 10px" }}
        >
          {toggle ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default Toggle;
