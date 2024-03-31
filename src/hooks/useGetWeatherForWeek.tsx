import { useMemo } from "react";
import { UseWeatherContext } from "../contexts/WeatherContext";

export default function useGetWeatherForWeek() {
  const { weather } = UseWeatherContext();

  // Memoizing weather data for the entire week
  const weatherWeekList = useMemo(() => {
    if (!weather) {
      return;
    }

    // Mapping weather data to get average weather for each day of the week
    const filteredResult = Object.entries(weather).map(([key, value]) => {
      // Calculate average index for weather data
      const averageWeatherIndex = Math.floor(value.length / 2);
      return {
        ...value[averageWeatherIndex],
        date: key,
      };
    });

    return filteredResult;
  }, [weather]);

  return { weatherWeekList };
}
