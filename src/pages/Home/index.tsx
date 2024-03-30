import WeatherList from "../../components/WeatherList";
import useGetWeatherForWeek from "../../hooks/useGetWeatherForWeek";

export default function Home() {
  const weathers = useGetWeatherForWeek();

  return (
    weathers && (
      <>
        <WeatherList weathers={weathers} isLink={true} />
      </>
    )
  );
}
