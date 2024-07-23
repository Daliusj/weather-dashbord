import React from "react";
import weatherIconsData from "../weatherIconsData";
import HourlyForecast from "./hourlyForecast/HourlyForecast";
import LongtermForecast from "./longtermForecast/LongtermForecast";
import WeatherParameter from "./weatherParemeter/WeatherParameter";
import weatherParametersData from "../weatherParametersData";
import sunData from "../sunData";
import Sun from "./sun/Sun";
import Clock from "./Clock";

export default function Dashboard({ forecastData }) {
  const [currentHour, setCurrentHour] = React.useState();
  const [currentDate, setCurrentDate] = React.useState();
  const [currentForecast, setCurrentForecast] = React.useState();
  const [isDay, setIsDay] = React.useState(true);

  React.useEffect(() => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    const date = new Date().toLocaleDateString("en-EN", options);
    setCurrentDate(date);

    let time = new Date().toLocaleTimeString("lt-LT", { hour12: false });
    time = time.split(":")[0];
    setCurrentHour(time);
    setIsDay(() => (time > 6 && time < 22 ? true : false));
  }, []);

  React.useEffect(() => {
    const filteredData =
      forecastData?.forecastTimestamps?.length &&
      forecastData.forecastTimestamps.filter(
        (timeStamp) =>
          parseInt(timeStamp.forecastTimeUtc.split(" ")[1].split(":")[0]) >=
          parseInt(currentHour)
      );
    setCurrentForecast(filteredData);
    console.log("current forecast", currentForecast);
  }, [forecastData]);

  function WeatherIcon() {
    const dayData = isDay ? weatherIconsData.day : weatherIconsData.night;
    const iconName =
      currentForecast[0] &&
      currentForecast[0].conditionCode.split("-").join("");
    const iconData = dayData[iconName];
    return (
      <img src={iconData} className="actual-weather-icon" alt="Weather Icon" />
    );
  }

  function WeatherText() {
    const weatherTextRaw =
      currentForecast?.length &&
      currentForecast[0].conditionCode.replace("-", " ");
    const weatherText =
      weatherTextRaw &&
      weatherTextRaw.charAt(0).toUpperCase() + weatherTextRaw.slice(1);

    return <p className="actual-weather-text">{weatherText}</p>;
  }

  return (
    <div className="main">
      <div className="dashboard">
        <div className="dashboard-container city-date">
          <p className="city-date--city">{forecastData?.place?.name}</p>
          <Clock />
          <p className="city-date--date">{currentDate}</p>
        </div>
        <div className="dashboard-container actual-weather">
          <div className="actual-weather-inner-container">
            <p className="actual-temperature">
              {currentForecast?.length &&
                Math.round(currentForecast[0]?.airTemperature)}
              °C
            </p>
            <div className="actual-weather-feels-container">
              <span className="actual-weather-feels-text">Feels like: </span>
              <span className="actual-weather-feels-temp">
                {currentForecast?.length &&
                  Math.round(currentForecast[0]?.feelsLikeTemperature)}
                °C
              </span>
            </div>
            <Sun
              iconUrl={sunData.sunrise.url}
              label={sunData.sunrise.label}
              time="05:26"
            />
          </div>
          <div className="actual-weather-inner-container">
            {currentForecast && <WeatherIcon />}
            {currentForecast && <WeatherText />}
          </div>
          <div className="parameters-container">
            {currentForecast && (
              <WeatherParameter
                iconUrl={weatherParametersData[0].url}
                value={currentForecast[0].relativeHumidity}
                symbol={weatherParametersData[0].symbol}
                label={weatherParametersData[0].label}
                key={weatherParametersData[0].id}
              />
            )}
            {currentForecast && (
              <WeatherParameter
                iconUrl={weatherParametersData[1].url}
                value={currentForecast[0].seaLevelPressure}
                symbol={weatherParametersData[1].symbol}
                label={weatherParametersData[1].label}
                key={weatherParametersData[1].id}
              />
            )}
            {currentForecast && (
              <WeatherParameter
                iconUrl={weatherParametersData[2].url}
                value={currentForecast[0].windSpeed}
                symbol={weatherParametersData[2].symbol}
                label={weatherParametersData[2].label}
                key={weatherParametersData[2].id}
              />
            )}
            {currentForecast && (
              <WeatherParameter
                iconUrl={weatherParametersData[3].url}
                value="6"
                symbol={weatherParametersData[3].symbol}
                label={weatherParametersData[3].label}
                key={weatherParametersData[3].id}
              />
            )}
          </div>
        </div>
        <div className="dashboard-container long-term-forecast longterm-inner-container">
          <p className="longterm-forecast-label ">5 Days Forecast</p>
          <LongtermForecast
            iconUrl={weatherIconsData.day.heavyrain}
            temperature="26"
            date="Friday, 2 Sep"
          />
        </div>
        <div className="dashboard-container hourly-forecast longterm-inner-container">
          <p className="longterm-forecast-label ">Hourly Forecast</p>
          <div className="hourly-forecast-container">
            {currentForecast && (
              <HourlyForecast
                currentForecast={currentForecast[1]}
                temperature={Math.round(currentForecast[1]?.airTemperature)}
                windDirection={currentForecast[1].windDirection}
                windSpeed={currentForecast[1].windSpeed}
              />
            )}
            {currentForecast && (
              <HourlyForecast
                currentForecast={currentForecast[2]}
                temperature={Math.round(currentForecast[2]?.airTemperature)}
                windDirection={currentForecast[2].windDirection}
                windSpeed={currentForecast[2].windSpeed}
              />
            )}
            {currentForecast && (
              <HourlyForecast
                currentForecast={currentForecast[3]}
                temperature={Math.round(currentForecast[3]?.airTemperature)}
                windDirection={currentForecast[3].windDirection}
                windSpeed={currentForecast[3].windSpeed}
              />
            )}
            {currentForecast && (
              <HourlyForecast
                currentForecast={currentForecast[4]}
                temperature={Math.round(currentForecast[4]?.airTemperature)}
                windDirection={currentForecast[4].windDirection}
                windSpeed={currentForecast[4].windSpeed}
              />
            )}
            {currentForecast && (
              <HourlyForecast
                currentForecast={currentForecast[5]}
                temperature={Math.round(currentForecast[5]?.airTemperature)}
                windDirection={currentForecast[5].windDirection}
                windSpeed={currentForecast[5].windSpeed}
              />
            )}
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
