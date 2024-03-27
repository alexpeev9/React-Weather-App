import useGetForecast from "../../../hooks/useGetForecast";

import Spinner from "../../commons/Spinner";

export default function WeatherList() {
  const { forecastData, loading } = useGetForecast();
  console.log(forecastData);
  return loading ? <Spinner /> : <></>;
}
