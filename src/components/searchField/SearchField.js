import React from "react";
import Select from "react-select";

import "./searchField.css";

export default function SearchField(props) {
  const SEARCHLOGO = "/images/search.png";

  function handleChange(event) {
    props.setSelectedLocation(event);
  }

  return (
    <div className="search-container">
      <img src={SEARCHLOGO} className="search-img" alt="Magnifier logo" />

      {props.locations && (
        <Select
          options={Object.values(props.locations)}
          onChange={handleChange}
          placeholder="Search for your prefered city..."
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: state.isFocused ? "grey" : "red",
            }),
          }}
        />
      )}
    </div>
  );
}
