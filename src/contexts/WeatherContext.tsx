import { createContext, useContext } from "react";

import { Props, WeatherWeek } from "../utils/types";
import useGetWeatherData from "../hooks/useGetWeatherData";
import useGetCoordinates from "../hooks/useGetCoordinates";
import { UseMeasurementContext } from "./MeasurementContext";

const WeatherContext = createContext<WeatherWeek | null>(null);

export type WeatherContextType = {
  weather: WeatherWeek | null;
  saveWeather: (weather: WeatherWeek) => void;
};

export function WeatherProvider({ children }: Props) {
  const { coordinates } = useGetCoordinates();
  const { measurement } = UseMeasurementContext();
  const { weatherData } = useGetWeatherData(measurement, coordinates);

  return (
    <WeatherContext.Provider value={weatherData}>
      {children}
    </WeatherContext.Provider>
  );
}

export function UseWeatherContext() {
  return useContext(WeatherContext);
}
