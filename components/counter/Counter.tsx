import React from "react";

export type CounterProps = {
  count: number;
};

export const Counter = (props: CounterProps) => {
  return (
    <>
      <p>The count is now {props.count}</p>
    </>
  );
};
