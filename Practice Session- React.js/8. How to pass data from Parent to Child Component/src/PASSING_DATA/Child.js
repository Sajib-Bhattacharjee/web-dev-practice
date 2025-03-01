import React from "react";

export default function Child(props) {
  const childData = "I'm data from Child";
  props.onChildData(childData);
  return (
    <div>
      <h1> {props.parentData} </h1>
    </div>
  );
}
