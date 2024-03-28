import { createContext, useContext } from "react";

import { Props, WeatherListData, WeatherData } from "../utils/types";
import useGetWeatherData from "../hooks/useGetWeatherData";
import useGetCoordinates from "../hooks/useGetCoordinates";
import { UseMeasurementContext } from "./MeasurementContext";

const WeatherContext = createContext<WeatherData | null>(null);

export type WeatherContextType = {
  weather: WeatherListData | null;
  saveWeather: (weather: WeatherListData) => void;
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
