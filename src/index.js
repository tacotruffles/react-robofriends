import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import searchReducer from "./store/reducers";

// CSS
import "tachyons";
import "./index.css";

// Parent App
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

// Redux Store
const store = createStore(searchReducer);

// App
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
