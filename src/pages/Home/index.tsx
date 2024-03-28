import WeatherList from "../../components/weather/WeatherList";
import { MeasurementForm } from "../../components/weather/MeasurementForm";

export default function Home() {
  return (
    <>
      <MeasurementForm />
      <WeatherList />
    </>
  );
}
