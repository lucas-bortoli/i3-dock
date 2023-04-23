import { useEffect, useState } from "react";

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const p = (n: number) => n.toString().padStart(2, "0");

  return <div className="clock">{[date.getHours(), date.getMinutes()].map(p).join(":")}</div>;
};

export default Clock;
