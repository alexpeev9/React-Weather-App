import { useMemo } from "react";

import { UseWeatherContext } from "../contexts/WeatherContext";
import { WeatherDay } from "../utils/types";

export default function useGetWeatherForWeek() {
  const weather = UseWeatherContext();
  return useMemo(() => {
    if (!weather) {
      return;
    }

    const filteredResult: WeatherDay[] = Object.entries(weather).map(
      ([key, value]) => {
        const averageWeatherIndex = Math.floor(value.length / 2);
        return {
          ...value[averageWeatherIndex],
          date: key,
        };
      }
    );

    return filteredResult;
  }, [weather]);
}
