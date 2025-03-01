import React from "react";
import useFetch from "./useFetch";

const DataFetch = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const { data, isLoading, error } = useFetch(url);

  const todosElements =
    data &&
    data.map((todo) => {
      return <p key={todo.id}>{todo.title}</p>;
    });

  const loadingMessage = (
    <p> Data is Loading...Please Wait for a while....!!!</p>
  );

  const errorMessage = <p>{error}</p>;

  return (
    <div>
      <h1>Todos </h1>
      {isLoading && loadingMessage}
      {error && errorMessage}
      {todosElements}
    </div>
  );
};

export default DataFetch;
