import { createContext, useContext } from "react";
import { Props, WeatherContextType } from "../utils/types";
import useGetWeatherData from "../hooks/useGetWeatherData";
import useGetCoordinates from "../hooks/useGetCoordinates";
import { UseUnitContext } from "./UnitContext";
import Notification from "../components/Notification";
import { textMessage } from "../utils/constants";

const WeatherContext = createContext<WeatherContextType>({
  weather: null,
  loading: false,
});

export function WeatherProvider({ children }: Props) {
  // Using custom hooks to get coordinates and weather data
  const { coordinates, message } = useGetCoordinates();
  const { unit } = UseUnitContext();
  const { weatherData, loading: loadingData } = useGetWeatherData(
    unit,
    coordinates
  );

  // Display a loading container while getting weather data
  if (loadingData) {
    return <Notification message={textMessage.loading} />;
  }

  // Display a message container if geolocation is not allowed
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
