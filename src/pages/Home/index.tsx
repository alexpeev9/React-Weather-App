import { UseMeasurementContext } from "../../contexts/MeasurementContext";
import useGetCoordinates from "../../hooks/useGetCoordinates";

import WeatherList from "../../components/weather/WeatherList";
import { MeasurementForm } from "../../components/weather/MeasurementForm";

export default function Home() {
  const { coordinates } = useGetCoordinates();
  const { measurement, saveMeasurement } = UseMeasurementContext();

  return coordinates ? (
    <>
      <MeasurementForm
        measurement={measurement}
        saveMeasurement={saveMeasurement}
      />
      <WeatherList measurement={measurement} coordinates={coordinates} />
    </>
  ) : (
    <>Please allow geo locations</>
  );
}
