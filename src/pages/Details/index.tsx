import { useParams } from "react-router-dom";
import useGetWeatherForDay from "../../hooks/useGetWeatherForDay";
import WeatherList from "../../components/WeatherList";
import { Heading, Span, Link, Section } from "./styled";

export default function Details() {
  const { date } = useParams();
  const { weatherForDay } = useGetWeatherForDay(date);

  // Extracting weather details for the specified day
  const weatherDetails = date && weatherForDay && weatherForDay[date];

  return (
    weatherDetails && (
      <>
        <Heading>
          Date: <Span data-test="weather-date">{date}</Span>
        </Heading>
        <WeatherList weathers={weatherDetails} />
        <Section>
          <Link to="/">Check other days</Link>
        </Section>
      </>
    )
  );
}
