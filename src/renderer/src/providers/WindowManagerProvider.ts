import i3 from "i3";
import { useEffect } from "react";

class WindowManager {
  // #client: i3Client;

  constructor() {
    // this.#client = i3.createClient();
  }

  switchWorkspaces(id: string | number) {
    // this.#client.command(`workspace number ${id.toString()}`);
  }

  /**
   * React hook for listening to workspace changes.
   */
  useWorkspaceSwitch() {
    useEffect(() => {
      //   this.#client.on("workspace", data => {
      //       console.log(data);
      //  });
    }, []);

    return [0];
  }
}

export const windowManager = new WindowManager();

export default WindowManager;
