import { contextBridge, ipcRenderer } from "electron";

const api = {
  sendWmCommand: (command: string) => ipcRenderer.send("wm-command", command),
};

const relayIpcEvent = eventName => {
  ipcRenderer.on(eventName, (_, data) => {
    console.log({ event: eventName, data });
    window.postMessage({ event: eventName, data });
  });
};

["wm-event:workspace"].map(eventName => relayIpcEvent(eventName));

contextBridge.exposeInMainWorld("api", api);
