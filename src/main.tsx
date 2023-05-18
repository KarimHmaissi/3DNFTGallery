import React from "react"
import ReactDOM from "react-dom/client"
import { DAppProvider } from "@usedapp/core"
import { Provider } from "react-redux"

import config from "./config/useDappConfig"
import { store } from "./app/store"
import App from "./App"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <DAppProvider config={config}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </DAppProvider>,
)
