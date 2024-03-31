import WeatherList from "../../components/WeatherList";
import useGetWeatherForWeek from "../../hooks/useGetWeatherForWeek";
import { textPage } from "../../utils/constants";
import { Heading } from "../Details/styled";

export default function Home() {
  const { weatherWeekList } = useGetWeatherForWeek();

  return (
    weatherWeekList && (
      <>
        <Heading>{textPage.days}</Heading>
        <WeatherList weathers={weatherWeekList} isLink={true} />
      </>
    )
  );
}
