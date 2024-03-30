import WeatherList from "../../components/WeatherList";
import useGetWeatherForWeek from "../../hooks/useGetWeatherForWeek";
import { Heading } from "../Details/styled";

export default function Home() {
  const { weatherWeekList } = useGetWeatherForWeek();

  return (
    weatherWeekList && (
      <>
        <Heading>Days:</Heading>
        <WeatherList weathers={weatherWeekList} isLink={true} />
      </>
    )
  );
}
