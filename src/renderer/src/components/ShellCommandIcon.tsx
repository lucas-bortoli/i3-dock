import classNames from "classnames";

declare var api: { spawnProcess: (command: string, argv: string[]) => void };

interface Props {
  icon: string;
  command: string;
  tooltip?: string;
}

const ShellCommandIcon = (props: Props) => {
  const launch = () => {
    const argv = [
      "-T",
      "@os_floating",
      "-o",
      "remember_window_size=false",
      "-o",
      "initial_window_width=100c",
      "-o",
      "initial_window_height=25c",
      "-o",
      "confirm_os_window_close=0",
    ];

    api.spawnProcess("kitty", [...argv, props.command]);
  };

  return (
    <button onClick={launch} title={props.tooltip}>
      <span className={classNames("material-icons", "icon", "icon-only")}>{props.icon}</span>
    </button>
  );
};

export default ShellCommandIcon;
