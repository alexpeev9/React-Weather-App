import { useEffect } from "react";
import { WeatherData } from "../../../utils/types";

export default function WeatherList({ weather }: { weather: WeatherData }) {
  useEffect(() => {
    console.log(weather);
  }, [weather]);
  return <></>;
}
