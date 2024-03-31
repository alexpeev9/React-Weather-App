import { Unit } from "./types";

// API key and URL for OpenWeatherMap API
const API_KEY = `${import.meta.env.VITE_API_KEY}`;
const API_URL = `https://api.openweathermap.org/data/2.5/forecast`;

// Local storage key for user's preferred unit
const LS_NAME = "unit";

// Get the endpoint URL for fetching weather data
export function getEndpointUrl(
  latitude: number,
  longitude: number,
  unit: Unit
) {
  return `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${
    unit || "metric"
  }`;
}

// Get user's preferred unit from local storage
export function getUserUnit() {
  return localStorage.getItem(LS_NAME) as Unit;
}

// Save user's preferred unit to local storage
export function saveUserUnit(unit: "metric" | "imperial") {
  return localStorage.setItem(LS_NAME, unit);
}
