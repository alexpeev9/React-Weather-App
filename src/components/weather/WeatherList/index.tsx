import { ChangeEvent } from "react";

import useGetForecast from "../../../hooks/useGetForecast";

import Spinner from "../../commons/Spinner";
import { Measurement } from "../../../utils/types";
import { UseMeasurementContext } from "../../../contexts/MeasurementContext";
import useGetCoordinates from "../../../hooks/useGetCoordinates";

const measurementValues = ["metric", "imperial"];

export default function WeatherList() {
  const { measurement, saveMeasurement } = UseMeasurementContext();
  const { coordinates } = useGetCoordinates();

  const { forecastData, loading } = useGetForecast(measurement, coordinates);

  const handleUnitChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    if (!measurementValues.includes(currentValue)) return;
    saveMeasurement(currentValue as Measurement);
  };

  console.log(forecastData);
  return (
    <>
      {coordinates ? (
        <>
          <form>
            <input
              type="radio"
              id="metric"
              name="measurement"
              value="metric"
              checked={measurement === "metric"}
              onChange={handleUnitChange}
            />
            <label htmlFor="metric">Metric</label>
            <input
              type="radio"
              id="imperial"
              name="measurement"
              value="imperial"
              checked={measurement === "imperial"}
              onChange={handleUnitChange}
            />
            <label htmlFor="imperial">Imperial</label>
          </form>
          {loading ? <Spinner /> : <></>}
        </>
      ) : (
        <>Please allow geo location</>
      )}
    </>
  );
}
