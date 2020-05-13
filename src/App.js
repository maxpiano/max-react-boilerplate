import React from "react";
import ReactDOM from "react-dom";
import Component from "./Component";

const App = () => {
  return <Component text="hello world" />;
};

ReactDOM.render(<App />, document.getElementById("root"));
