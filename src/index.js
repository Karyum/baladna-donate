import React from "react"
import ReactDOM from "react-dom"
import "./reset.scss"
import "./progress-bar.scss"
import "./index.scss"
import App from "./App"

console.log("Built by @Karyum")

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
