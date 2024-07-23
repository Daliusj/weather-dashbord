import "./weatherParameter.css";
import React  from 'react';
export default function WeatherParameter(props) {
  return (
    <div className="parameter-container">
      <img
        src={props.iconUrl}
        className="parameter-icon"
        alt="weather parameter icon"
      />
      <p className="parameter-value">
        {props.value}
        {props.symbol}
      </p>
      <p className="parameter-label">{props.label}</p>
    </div>
  );
}
