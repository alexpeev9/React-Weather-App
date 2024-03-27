import { apiKey } from "./env";

const API_URL: string = `https://api.openweathermap.org/data/2.5/forecast`;
const SHOWN_DAYS: number = 5;

export default function getEndpointUrl(
  latitude: number,
  longitude: number
): string {
  return `${API_URL}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&cnt=${SHOWN_DAYS}`;
}
