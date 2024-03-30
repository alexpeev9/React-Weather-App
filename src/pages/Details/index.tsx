import { useParams } from "react-router-dom";
import useGetWeatherForDay from "../../hooks/useGetWeatherForDay";
import WeatherList from "../../components/WeatherList";
import { Heading2, Span } from "./styled";

export default function Details() {
  const { date } = useParams();
  const weatherDetailsObject = useGetWeatherForDay(date);

  if (!date) {
    return <>Not a valid date</>;
  }

  const weatherDetails = weatherDetailsObject && weatherDetailsObject[date];

  return (
    weatherDetails && (
      <>
        <Heading2>
          Date: <Span>{date}</Span>
        </Heading2>
        <WeatherList weathers={weatherDetails} />
      </>
    )
  );
}
