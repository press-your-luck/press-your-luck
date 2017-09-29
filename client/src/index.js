import React from "react";
import ReactDOM from "react-dom";
import App from "./main/app";
import { mainReducer } from "./main/redux/reducers/reducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";

let store = createStore(mainReducer, applyMiddleware(thunk))


ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById("root"));

