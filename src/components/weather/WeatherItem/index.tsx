import { Link } from "react-router-dom";
import { WeatherDay } from "../../../utils/types";

export default function WeatherItem({ weather }: { weather: WeatherDay }) {
  const { date, temperature, weatherHour } = weather;
  return (
    <>
      <h2>{date}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${weatherHour.icon}@2x.png`}
        alt={weatherHour.main}
      />
      <p>{temperature.temp}</p>
      <Link to={`/day/${date}`}>Link</Link>
    </>
  );
}
