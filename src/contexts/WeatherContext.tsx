import { createContext, useContext } from "react";

import { Props, WeatherContextType } from "../utils/types";
import useGetWeatherData from "../hooks/useGetWeatherData";
import useGetCoordinates from "../hooks/useGetCoordinates";
import { UseUnitContext } from "./UnitContext";
import Loader from "../components/Loader";

const WeatherContext = createContext<WeatherContextType>({
  weather: null,
  loading: false,
});

export function WeatherProvider({ children }: Props) {
  const { coordinates } = useGetCoordinates();
  const { unit } = UseUnitContext();
  const { weatherData, loading } = useGetWeatherData(unit, coordinates);

  if (loading) {
    return <Loader />;
  }

  return (
    <WeatherContext.Provider value={{ weather: weatherData, loading: loading }}>
      {children}
    </WeatherContext.Provider>
  );
}

export function UseWeatherContext() {
  return useContext(WeatherContext);
}
