import { useMemo } from "react";
import { UseWeatherContext } from "../contexts/WeatherContext";

export default function useGetWeatherForDay(date: string | undefined) {
  const weather = UseWeatherContext();

  const weatherForDay = useMemo(() => {
    if (!weather || date === undefined) {
      return;
    }

    const filteredDay = Object.fromEntries(
      Object.entries(weather.weatherList).filter(([key]) => key === date)
    );

    if (Object.keys(filteredDay).length === 0) {
      return;
    }

    return filteredDay;
  }, [date, weather]);

  return weatherForDay;
}
