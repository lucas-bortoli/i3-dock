import { contextBridge, ipcRenderer } from "electron";

const api = {
  sendWmCommand: (command: string) => ipcRenderer.send("wm-command", command),
  spawnProcess: (command: string, argv: string[]) =>
    ipcRenderer.send("spawn-command", command, argv),
  spawnProcessAndGetOutput: (command: string, argv: string[]): Promise<string> =>
    ipcRenderer.invoke("exec-command-with-output", command, argv),
};

const relayIpcEvent = eventName => {
  ipcRenderer.on(eventName, (_, data) => {
    console.log({ event: eventName, data });
    window.postMessage({ event: eventName, data });
  });
};

["wm-event:workspace"].map(eventName => relayIpcEvent(eventName));

contextBridge.exposeInMainWorld("api", api);
