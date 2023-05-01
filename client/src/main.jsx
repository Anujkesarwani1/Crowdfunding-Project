import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThirdwebProvider desiredChainId={ChainId.Goerli}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ThirdwebProvider>
);
