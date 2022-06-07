import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { TransactionProvider } from "./context/TransactionsContext";
import "./index.css";

ReactDOM.render(
  <TransactionProvider>
    <App />
  </TransactionProvider>,
  document.getElementById("root"),
);