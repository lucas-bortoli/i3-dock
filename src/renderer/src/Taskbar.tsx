import Clock from "./components/Clock";
import CommandOutput from "./components/CommandOutput";
import MediaPlayer from "./components/MediaPlayer";
import Separator from "./components/Separator";
import ShellCommandIcon from "./components/ShellCommandIcon";
import Spacer from "./components/Spacer";
import WorkspaceSwitcher from "./components/WorkspaceSwitcher";

const Taskbar = () => {
  return (
    <div className="taskbar">
      <WorkspaceSwitcher />
      <Spacer />
      <MediaPlayer />
      <Separator marginLeft marginRight visible />
      <div className="shellCommandBar">
        <ShellCommandIcon icon="network_wifi" command="nmtui" />
        <ShellCommandIcon icon="bluetooth" command="bluetuith" />
        <ShellCommandIcon icon="volume_up" command="pulsemixer" />
      </div>
      <Separator marginLeft visible={false} />
      <CommandOutput
        command="cat"
        args={["/sys/class/power_supply/BAT1/capacity"]}
        interval={60000}
        transform={p => p.trim() + "%"}
      />
      <Separator marginRight visible={false} />
      <Clock />
    </div>
  );
};

export default Taskbar;
