import Clock from "./components/Clock";
import Spacer from "./components/Spacer";
import WorkspaceSwitcher from "./components/WorkspaceSwitcher";

const Taskbar = () => {
  return (
    <div className="taskbar">
      <WorkspaceSwitcher />
      <Spacer />
      <Clock />
    </div>
  );
};

export default Taskbar;
