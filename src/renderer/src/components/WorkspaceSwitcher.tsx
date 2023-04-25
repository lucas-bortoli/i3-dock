import classNames from "classnames";
import { windowManager } from "@renderer/providers/windowManager/WindowManagerProvider";
import "material-icons";

const workspaces: { name: string; displayName?: string; icon?: string }[] = [
  { name: "1", icon: "travel_explore", displayName: "Web" },
  { name: "2", icon: "code", displayName: "Dev" },
  { name: "3", icon: "terminal", displayName: "Terminal" },
  { name: "4", icon: "tag", displayName: "Scratchpad" },
];

const WorkspaceSwitcher = () => {
  const [currentWorkspace, setCurrentWorkspace] = windowManager.useWorkspaceSwitch();

  return (
    <ul className="workspaceSwitcher">
      {workspaces.map(workspace => (
        <button
          key={workspace.name}
          className={classNames("workspace", { current: currentWorkspace === workspace.name })}
          onClick={() => setCurrentWorkspace(workspace.name)}>
          {workspace.icon && (
            <span className={classNames("material-icons", "icon")}>{workspace.icon}</span>
          )}
          {workspace.displayName ?? workspace.name}
        </button>
      ))}
    </ul>
  );
};

export default WorkspaceSwitcher;
