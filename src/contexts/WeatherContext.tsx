import { createContext, useContext } from "react";

import { Props, WeatherContextType } from "../utils/types";
import useGetWeatherData from "../hooks/useGetWeatherData";
import useGetCoordinates from "../hooks/useGetCoordinates";
import { UseUnitContext } from "./UnitContext";
import Notification from "../components/Notification";

const notificationText = {
  loading: "Loading...",
};

const WeatherContext = createContext<WeatherContextType>({
  weather: null,
  loading: false,
});

export function WeatherProvider({ children }: Props) {
  const { coordinates, message } = useGetCoordinates();
  const { unit } = UseUnitContext();
  const { weatherData, loading: loadingData } = useGetWeatherData(
    unit,
    coordinates
  );

  if (loadingData) {
    return <Notification message={notificationText.loading} />;
  }

  if (!coordinates) {
    return <Notification message={message} />;
  }

  return (
    <WeatherContext.Provider
      value={{ weather: weatherData, loading: loadingData }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function UseWeatherContext() {
  return useContext(WeatherContext);
}
