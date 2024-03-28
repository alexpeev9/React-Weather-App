import WeatherList from "../../components/weather/WeatherList";
import { MeasurementForm } from "../../components/weather/MeasurementForm";
import { UseWeatherContext } from "../../contexts/WeatherContext";

export default function Home() {
  const weather = UseWeatherContext();

  return weather ? (
    <>
      <MeasurementForm />
      <WeatherList weather={weather} />
    </>
  ) : (
    <>Please allow geo locations</>
  );
}
