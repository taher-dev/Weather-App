import React, { useState } from "react";

export default function App() {
  const [city, setCity] = useState("");

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Prototype: Search clicked for city:", city);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4 text-center">
          Weather App — Prototype
        </h1>

        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={city}
            onChange={handleChange}
            placeholder="Enter city..."
            aria-label="City name"
            className="flex-grow border rounded-l px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600"
          >
            Search
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-500">
          Prototype mode — the Search button currently logs your input to the
          browser console.
        </p>
      </div>
    </div>
  );
}
