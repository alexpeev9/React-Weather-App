import WeatherList from "../../components/WeatherList";
import useGetWeatherForWeek from "../../hooks/useGetWeatherForWeek";
import { Heading } from "../Details/styled";

export default function Home() {
  const weathers = useGetWeatherForWeek();

  return (
    weathers && (
      <>
        <Heading>Days:</Heading>
        <WeatherList weathers={weathers} isLink={true} />
      </>
    )
  );
}
