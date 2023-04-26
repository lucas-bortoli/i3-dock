import { useEffect, useState } from "react";

declare var api: {
  spawnProcessAndGetOutput: (command: string, argv: string[]) => Promise<string>;
};

interface Props {
  command: string;
  args?: string[];
  interval?: number;
  transform?: (output: string) => string;
}

const CommandOutput = (props: Props) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    const handler = async () => {
      const data = await api.spawnProcessAndGetOutput(props.command, props.args ?? []);

      setOutput(data);
    };

    setTimeout(handler, 0);

    const interval = setInterval(handler, props.interval ?? 5000);

    return () => clearInterval(interval);
  }, []);

  return <>{props.transform ? props.transform(output) : output}</>;
};

export default CommandOutput;
