import React from "react";
import "./hourlyForecast.css";
import weatherIconsData from "../../weatherIconsData";

export default function HourlyForecast(props) {
  function forecastTime() {
    const timeParts = props.currentForecast.forecastTimeUtc
      .split(" ")[1]
      .split(":");
    const time = `${timeParts[0]}:${timeParts[1]} `;
    return time;
  }

  function isDayTime() {
    const hours = props.currentForecast && forecastTime().split(":")[0];
    return hours > 6 && hours < 20;
  }

  function WeatherIconEl() {
    const dayData = isDayTime() ? weatherIconsData.day : weatherIconsData.night;
    const iconName =
      props.currentForecast &&
      props.currentForecast.conditionCode.split("-").join("");
    const iconData = dayData[iconName];
    return <img src={iconData} alt="weather icon" className="icon" />;
  }

  const rotation = { transform: `rotate(${props.windDirection - 180}deg)` };

  return (
    <div
      className={
        isDayTime() ? "column-container day" : "column-container night"
      }
    >
      {props.currentForecast && <p className="time">{forecastTime()}</p>}
      <WeatherIconEl />
      {/* <img src={props.iconUrl} alt="weather icon" className="icon" /> */}
      <p className="parameter">{props.temperature}°C</p>
      <img
        style={rotation}
        src="/images/navigation.png"
        alt="weather icon"
        className="icon"
      />
      <p className="parameter">{props.windSpeed}m/s</p>
    </div>
  );
}
