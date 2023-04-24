import { ElectronAPI } from "@electron-toolkit/preload";

declare global {
  interface Window {
    api: {
      sendWmCommand: (command: string) => void;
    };
  }
}
