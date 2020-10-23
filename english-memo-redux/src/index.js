import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// 여러 곳에 퍼져있는 상태값들을 한곳에서 모아서 관리하겠다.
import { createStore } from "redux";
import modules from "./modules";
// 만들어둔 리듀서를 보고 관리해야되는 상태값들을 파악해서 정리한다.
import { Provider } from "react-redux";
const store = createStore(modules);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
