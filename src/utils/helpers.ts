import { apiKey } from "./env";
import { Measurement } from "./types";

const API_URL: string = `https://api.openweathermap.org/data/2.5/forecast`;
const SHOWN_DAYS: number = 5;
const LS_NAME = "measurement";

export function getEndpointUrl(
  latitude: number,
  longitude: number,
  measurement: Measurement
): string {
  return `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&cnt=${SHOWN_DAYS}&unit=${
    measurement || "standard"
  }`;
}

export function getUserMeasurement() {
  return localStorage.getItem(LS_NAME) as Measurement;
}
