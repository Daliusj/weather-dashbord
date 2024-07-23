import "./sun.css";
import React  from 'react';

export default function Sun(props) {
  return (
    <div className="sun-container">
      <img src={props.iconUrl} className="icon" alt="sun icon" />
      <div>
        <p className="sun-label">{props.label}</p>
        <p className="sun-time">{props.time}</p>
      </div>
    </div>
  );
}
