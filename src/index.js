import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import searchReducer from "./store/reducers";

// CSS
import "tachyons";
import "./index.css";

// Parent App
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";

// Redux Middleware
const logger = createLogger();

// Redux Stores
const store = createStore(searchReducer, applyMiddleware(thunkMiddleware, logger));

// App
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
