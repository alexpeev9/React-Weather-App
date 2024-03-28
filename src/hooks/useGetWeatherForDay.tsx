import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { UseWeatherContext } from "../contexts/WeatherContext";

export default function useGetWeatherForDay(number: string | undefined) {
  const navigate = useNavigate();
  const weather = UseWeatherContext();

  return useMemo(() => {
    if (!weather) {
      return;
    }

    if (!number || !/^[1-5]$/.test(number)) {
      navigate("/not-found");
    }

    return Object.values(weather.weatherList)[Number(number) - 1];
  }, [navigate, number, weather]);
}
