import React from "react";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <div>
        <h1>Weather App - Prototype</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="Enter city..."
            aria-label="City name"
          />

          <button type="submit">Search</button>
        </form>

        <p>
          Prototype mode — the Search button currently logs your input to the
          browser console.
        </p>
      </div>
    </div>
  );
}

export default App;
