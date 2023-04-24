import React from "react";
import ReactDOM from "react-dom/client";
import Taskbar from "./Taskbar";
import "./assets/index.scss";
import { windowManager } from "./providers/windowManager/WindowManagerProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Taskbar />
  </React.StrictMode>
);

setTimeout(() => {
  windowManager.updateSelfPosition();
}, 100);
