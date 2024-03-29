import { useMemo } from "react";

import { UseWeatherContext } from "../contexts/WeatherContext";

export default function useGetWeatherForWeek() {
  const weather = UseWeatherContext();
  return useMemo(() => {
    if (!weather) {
      return;
    }

    return Object.entries(weather.weatherList).map(([key, value]) => {
      const averageWeatherIndex = Math.floor(value.length / 2);
      return {
        date: key,
        weather: value[averageWeatherIndex],
      };
    });
  }, [weather]);
}
