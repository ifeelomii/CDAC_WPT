import React, { useState } from "react";
import "./Converter.css";

const Converter = () => {
  const [value, setValue] = useState(0);
  const [unit, setUnit] = useState("kg");
  const [convertedValue, setConvertedValue] = useState(0);

  const handleConvert = () => {
    let converted = 0;

    // Convert kg to grams
    if (unit == "kg") {
      converted = value * 1000;
    }
    // Convert grams to kg
    else {
      converted = value / 1000;
    }

    // Update the converted value state
    setConvertedValue(converted);
  };

  // Update the value state variable with the new input value
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleUnitChange = (e) => {
    setUnit(e.target.value);
  };

  return (
    <>
      {/* Input HTML Element */}
      <div id="container">
        <label htmlFor="value">
          Enter Weight
          <br />
          <input type="number" id="value" onChange={handleInputChange} />
        </label>
        <br />
        {/* Unit Dropdown Box */}
        <label htmlFor="unit">
          Select Unit
          <br />
          <select id="unit" onChange={handleUnitChange}>
            <option value="kg">Kilograms</option>
            <option value="g">Grams</option>
          </select>
        </label>
        <br />
        <button onClick={handleConvert} id="button">
          <strong>Convert</strong>
        </button>
        <p id="result">
          {value} {unit == "kg" ? "kg" : "g"} = {convertedValue}
          {unit == "kg" ? "g" : "kg"}
        </p>
      </div>
    </>
  );
};

export default Converter;
