import { Link } from "react-router-dom";

import { WeatherDay } from "../../utils/types";
import { H3, Image, P, Section, WeatherContainer } from "./styled";
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
      <Section>
        <H3>{date}</H3>
        <P>
          Temperature: {temperature.temp}{" "}
          {(unit === "metric" || unit === null) && "°C"}
          {unit === "imperial" && "°F"}
        </P>
        <P>Weather: {weatherHour.main}</P>
      </Section>
    </WeatherContainer>
  );

  return isLink ? <Link to={`/day/${date}`}>{card}</Link> : card;
}
