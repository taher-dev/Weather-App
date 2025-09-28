import React, { useState } from "react";
import SearchForm from "./components/SearchForm";

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
          Weather App - Prototype
        </h1>

        <SearchForm
          city={city}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />

        <p className="mt-4 text-sm text-gray-500">
          Prototype mode — the Search button currently logs your input to the
          browser console.
        </p>
      </div>
    </div>
  );
}
