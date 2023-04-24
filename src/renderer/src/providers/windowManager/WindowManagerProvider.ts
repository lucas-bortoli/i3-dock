import { useEffect, useState } from "react";
import { I3Event } from "./types";

declare var api: {
  sendWmCommand: (command: string) => void;
};

class WindowManager {
  #currentWindowTitle: string = "@dock";

  constructor() {
    setInterval(() => {
      this.updateSelfPosition();
    }, 3000);
  }

  /**
   * Envia um comando arbitrário ao i3.
   * @param command
   */
  sendCommand(command: string) {
    api.sendWmCommand(command);
  }

  /**
   * Envia um comando ao i3 referente à janela da dock. Todas as operações serão aplicadas a essa janela.
   * @param command
   */
  sendCommandForThisWindow(command: string) {
    this.sendCommand(`[title="${this.#currentWindowTitle}"] ${command}`);
  }

  /**
   * Muda o workspace atual do i3
   * @param workspaceName Nome do workspace desejado
   */
  switchWorkspaces(workspaceName: string | number) {
    this.sendCommand(`workspace number ${workspaceName.toString()}`);
    this.updateSelfPosition();
  }

  /**
   * Calcula a posição na tela que a dock deve estar, e a posiciona ali.
   */
  updateSelfPosition() {
    this.sendCommandForThisWindow(`floating enable`);
    this.sendCommandForThisWindow(`move position 0 ${1080 - innerHeight}`);
  }

  /**
   * React hook for listening to workspace changes.
   */
  useWorkspaceSwitch(): [string, (workspaceName: string) => void] {
    const [currentWorkspace, setCurrentWorkspace] = useState("1");

    useEffect(() => {
      const handleMessage = msg => {
        if (msg.source !== window) {
          return;
        }
        const { event, data } = msg.data as I3Event;

        if (event === "wm-event:workspace" && data.change === "focus") {
          setCurrentWorkspace(data.current.name);
          this.updateSelfPosition();
        }
      };

      window.addEventListener("message", handleMessage);

      return () => window.removeEventListener("message", handleMessage);
    }, []);

    const changeWorkspace = (newWorkspace: string) => {
      this.switchWorkspaces(newWorkspace);
    };

    return [currentWorkspace, changeWorkspace];
  }
}

export const windowManager = new WindowManager();

export default WindowManager;
