import React from "react";
import ReactDOM from "react-dom";
import Component from "./Component";

const App = () => {
  return (
    <React.StrictMode>
      <Component text="hello world" />
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
