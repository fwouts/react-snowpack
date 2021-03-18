import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";

let i = 0;
setInterval(() => {
  i += 1;
  ReactDOM.render(
    <React.StrictMode>
      <App count={i} />
    </React.StrictMode>,
    document.getElementById("root")
  );
}, 10);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
const meta = import.meta as any;
if (meta.hot) {
  meta.hot.accept();
}
