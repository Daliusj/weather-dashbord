import SearchField from "./searchField/SearchField";
import React  from 'react';

export default function Navbar(props) {
  return (
    <nav className="main navbar">
      <SearchField
        locations={props.locations}
        setSelectedLocation={props.setSelectedLocation}
        selectedLocation={props.selectedLocation}
      />
      <div
        className="settings-icon"
        onClick={props.handleShowSettingsButton}
      ></div>
    </nav>
  );
}
