import React from "react";

export const Child = (props) => {
  props.onChildData({ name: "Anisul Islam", profession: "Teacher" });

  return <div>Child</div>;
};
