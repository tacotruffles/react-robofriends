import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import "./index.css";
import Card from "./components/Card";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Card />, document.getElementById("root"));
registerServiceWorker();
