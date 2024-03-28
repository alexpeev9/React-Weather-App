import { WeatherInfo } from "../../../utils/types";

export default function WeatherItem({
  weather,
  date,
}: {
  weather: WeatherInfo;
  date: string;
}) {
  const { main, icon, description } = weather;
  return (
    <>
      <h2>{date}</h2>
      <h2>{weather.main}</h2>
      <img
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={main}
      />
      <p>{description}</p>
    </>
  );
}
