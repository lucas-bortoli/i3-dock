import classNames from "classnames";
import { windowManager } from "@renderer/providers/windowManager/WindowManagerProvider";

const WorkspaceSwitcher = () => {
  const [currentWorkspace, setCurrentWorkspace] = windowManager.useWorkspaceSwitch();

  return (
    <ul className="workspaceSwitcher">
      {["1", "2", "3", "4", "5"].map(workspace => (
        <li
          key={workspace}
          className={classNames("workspace", { current: currentWorkspace === workspace })}
          onClick={() => setCurrentWorkspace(workspace)}>
          {workspace}
        </li>
      ))}
    </ul>
  );
};

export default WorkspaceSwitcher;
