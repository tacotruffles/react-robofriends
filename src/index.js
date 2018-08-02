import React from "react";
import ReactDOM from "react-dom";

// CSS
import "tachyons";
import "./index.css";

// Parent App
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
