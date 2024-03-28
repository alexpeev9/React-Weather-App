import { useEffect } from "react";
import { UseWeatherContext } from "../../../contexts/WeatherContext";

export default function WeatherList() {
  const weather = UseWeatherContext();

  useEffect(() => {
    console.log(weather);
  }, [weather]);
  return <></>;
}
