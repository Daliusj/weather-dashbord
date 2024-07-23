import React from "react";
export default function Clock() {
  const [currentTime, setCurrentTime] = React.useState();
  function clock() {
    let time = new Date().toLocaleTimeString("lt-LT", { hour12: false });
    time = time.split(" ")[0];
    setCurrentTime(time);
  }
  setInterval(clock, 1000);

  return <p className="city-date--time">{currentTime}</p>;
}
