import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./App";

import PRODUCTS_LIST from "./productsList.json";

ReactDOM.render(<App data={PRODUCTS_LIST}/>, document.getElementById("root"));

