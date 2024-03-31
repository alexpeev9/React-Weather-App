import { useMemo } from "react";
import { UseWeatherContext } from "../contexts/WeatherContext";

export default function useGetWeatherForDay(date: string | undefined) {
  const { weather } = UseWeatherContext();

  // Memoizing weather data for the specified day
  const weatherForDay = useMemo(() => {
    if (!weather || date === undefined) {
      return;
    }

    // Filtering weather data for the specified date
    const filteredDay = Object.fromEntries(
      Object.entries(weather).filter(([key]) => key === date)
    );

    // Return if no data is found for the specified date
    if (Object.keys(filteredDay).length === 0) {
      return;
    }

    return filteredDay;
  }, [date, weather]);

  return { weatherForDay };
}
