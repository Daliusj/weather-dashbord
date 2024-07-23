import "./longtermForecast.css";
import React  from 'react';

export default function LongtermForecast(props) {
  return (
    <div className="row-container">
      <img src={props.iconUrl} alt="weather icon" className="icon" />
      <p className="temp">{props.temperature}°C</p>
      <p className="date">{props.date}</p>
    </div>
  );
}
