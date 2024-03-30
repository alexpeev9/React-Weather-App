import { Link } from "react-router-dom";

import { WeatherDay } from "../../utils/types";
import { Image, WeatherContainer } from "./styled";
import { Unit } from "../../utils/types";

export default function WeatherItem({
  weather,
  unit,
  isLink,
}: {
  weather: WeatherDay;
  unit: Unit;
  isLink: boolean;
}) {
  const { date, temperature, weatherHour } = weather;
  const card = (
    <WeatherContainer>
      <Image
        src={`https://openweathermap.org/img/wn/${weatherHour.icon}@2x.png`}
        alt={weatherHour.main}
      />
      <div>
        <h3>{date}</h3>
        <p>
          {temperature.temp} {unit === "metric" && "°C"}
          {unit === "imperial" && "°F"}
          {unit === null && "K"}
        </p>
        <p>{weatherHour.main}</p>
      </div>
    </WeatherContainer>
  );

  return isLink ? <Link to={`/day/${date}`}>{card}</Link> : card;
}
