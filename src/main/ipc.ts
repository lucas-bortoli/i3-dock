import { spawn } from "child_process";
import { app, ipcMain, webContents } from "electron";
import { spawn as spawnPromise } from "child-process-promise";
import i3 from "i3";

interface i3Client {
  command: (cmd: string) => any;
  on: (event: string, handler: (payload: any) => void) => any;
}

app.whenReady().then(() => {
  const client: i3Client = i3.createClient();

  ipcMain.on("wm-command", (event, command: string) => {
    client.command(command);
  });

  ipcMain.on("spawn-command", (_, command: string, args: string[]) => {
    spawn(command, args);
  });

  ipcMain.handle("exec-command-with-output", async (event, command: string, args: string[]) => {
    const result = await spawnPromise(command, args, { capture: ["stdout"] });

    return result.stdout;
  });

  client.on("workspace", data => {
    webContents.getAllWebContents().map(wc => {
      wc.send("wm-event:workspace", data);
    });
  });
});
