import React from "react";
import { Counter, CounterProps } from "./counter";

export const App = (props: CounterProps) => {
  return (
    <>
      <h1>Hello, World!</h1>
      <Counter {...props} />
    </>
  );
};
