import useGetWeatherForWeek from "../../../hooks/useGetWeatherForWeek";
import WeatherItem from "../WeatherItem";

export default function WeatherList() {
  const weathers = useGetWeatherForWeek();
  return (
    weathers &&
    weathers.map((weather, key) => <WeatherItem key={key} weather={weather} />)
  );
}
