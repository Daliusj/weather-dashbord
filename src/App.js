import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";

export default function App() {
  const [showSettings, setShowSettings] = React.useState(false);
  const [locations, setLocations] = React.useState([]);
  const [selectedLocation, setSelectedLocation] = React.useState({
    value: "Kaunas",
    label: "",
  });
  const [forecastData, setForecastData] = React.useState({});

  function handleShowSettingsButton() {
    setShowSettings((prevState) => !prevState);
  }

  React.useEffect(() => {
    async function getLocations() {
      const res = await fetch("http://localhost:8000");
      const data = await res.json();
      const places = data.map((place) => {
        return { value: place.code, label: place.name };
      });
      setLocations(places);
    }
    getLocations();
  }, []);

  React.useEffect(() => {
    async function getForecastData() {
      const url = "http://localhost:8000/" + selectedLocation.value;
      const res = await fetch(url);
      const data = await res.json();
      setForecastData(data);
    }
    getForecastData();
  }, [selectedLocation]);

  return (
    <div>
      <Navbar
        handleShowSettingsButton={handleShowSettingsButton}
        locations={locations}
        setSelectedLocation={setSelectedLocation}
        selectedLocation={selectedLocation}
      />
      {showSettings && <Settings />}
      <Dashboard forecastData={forecastData} />
    </div>
  );
}
