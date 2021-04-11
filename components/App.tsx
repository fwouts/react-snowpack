import React from "react";
import { LoggedIn } from "../stories/Page.stories";
import { CounterProps } from "./counter";

export const App = (_props: CounterProps) => {
  return (
    <>
      <LoggedIn
        onLogin={() => {}}
        onLogout={() => {}}
        onCreateAccount={() => {}}
      />
    </>
  );
};
