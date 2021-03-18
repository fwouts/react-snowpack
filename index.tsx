import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

let i = 0;
setInterval(() => {
  i += 1;
  ReactDOM.render(<App count={i} />, document.getElementById("root"));
}, 10);
