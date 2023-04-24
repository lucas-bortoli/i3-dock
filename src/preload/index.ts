import { contextBridge, ipcRenderer } from "electron";

const api = {};

ipcRenderer.on("wm-event:workspace", (event, data) => {
  console.log(data);
});

contextBridge.exposeInMainWorld("api", api);
