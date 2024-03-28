import { useEffect } from "react";

import useGetForecast from "../../../hooks/useGetForecast";

import Spinner from "../../commons/Spinner";
import { Coordinates, Measurement } from "../../../utils/types";

export default function WeatherList({
  measurement,
  coordinates,
}: {
  measurement: Measurement;
  coordinates: Coordinates | null;
}) {
  const { forecastData, loading } = useGetForecast(measurement, coordinates);

  useEffect(() => {
    console.log(forecastData);
  }, [forecastData]);

  return <>{loading ? <Spinner /> : <></>}</>;
}
