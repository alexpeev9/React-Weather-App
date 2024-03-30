import { apiKey } from "./env";
import { Unit } from "./types";

const API_URL: string = `https://api.openweathermap.org/data/2.5/forecast`;
const LS_NAME = "unit";

export function getEndpointUrl(
  latitude: number,
  longitude: number,
  unit: Unit
): string {
  return `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${
    unit || "metric"
  }`;
}

export function getUserUnit() {
  return localStorage.getItem(LS_NAME) as Unit;
}

export function saveUserUnit(unit: "metric" | "imperial") {
  return localStorage.setItem(LS_NAME, unit);
}
