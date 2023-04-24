import { useState } from "react";
import classNames from "classnames";
import { windowManager } from "@renderer/providers/WindowManagerProvider";

const WorkspaceSwitcher = () => {
  const [currentWorkspace] = useState(1);
  const [workspace] = windowManager.useWorkspaceSwitch();

  return (
    <ul className="workspaceSwitcher">
      {[1, 2, 3, 4, 5].map(workspace => (
        <li
          key={workspace}
          className={classNames("workspace", { current: currentWorkspace === workspace })}>
          {workspace}
        </li>
      ))}
    </ul>
  );
};

export default WorkspaceSwitcher;
