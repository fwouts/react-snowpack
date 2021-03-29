import React from "react";
import { Counter, CounterProps } from "./counter";

// This unused import is enough to break everything.
import fs from "fs";

export const App = (props: CounterProps) => {
  return (
    <>
      <h1>Hello, World!</h1>
      <Counter {...props} />
    </>
  );
};
