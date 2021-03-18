import React from "react";

export const App = (props: { count: number }) => {
  return (
    <>
      <h1>Hello, World!</h1>
      <p>The count is now {props.count}</p>
    </>
  );
};
