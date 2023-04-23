import { useState } from "react";
import classNames from "classnames";

const WorkspaceSwitcher = () => {
  const [currentWorkspace] = useState(1);

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
