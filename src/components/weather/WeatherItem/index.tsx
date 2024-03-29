import { Link } from "react-router-dom";
import { WeatherDay } from "../../../utils/types";
import styled from "styled-components";

export default function WeatherItem({ weather }: { weather: WeatherDay }) {
  const { date, temperature, weatherHour } = weather;
  return (
    <>
      <H2>{date}</H2>
      <img
        src={`https://openweathermap.org/img/wn/${weatherHour.icon}@2x.png`}
        alt={weatherHour.main}
      />
      <p>{temperature.temp}</p>
      <Link to={`/day/${date}`}>Link</Link>
    </>
  );
}

const H2 = styled.h2`
  text-decoration: underline;
`;
