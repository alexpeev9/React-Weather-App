import { useEffect, useState } from "react";
import axios from "axios";

import { getEndpointUrl } from "../utils/helpers";
import { Coordinates, Measurement } from "../utils/types";
import { UseMeasurementContext } from "../contexts/MeasurementContext";
import { WeatherData, WeatherWeek } from "../utils/types";

export default function useGetWeatherData(
  measurement: Measurement,
  coordinates: Coordinates | null
) {
  const { saveMeasurement } = UseMeasurementContext();
  const [weatherData, setWeatherData] = useState<WeatherWeek | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!coordinates || !coordinates.latitude || !coordinates.longitude)
        return;

      saveMeasurement(measurement);

      axios({
        method: "get",
        url: `${getEndpointUrl(
          coordinates.latitude,
          coordinates.longitude,
          measurement
        )}`,
      })
        .then((res) => {
          const weatherResponse = res.data as WeatherData;
          const filteredData: WeatherWeek = {};

          weatherResponse.list.forEach((weatherWeek) => {
            const { dt_txt, weather, main } = weatherWeek;
            const dateArray = dt_txt.split(" ");
            const date = dateArray[0];
            const time = dateArray[1];

            if (!filteredData[date]) {
              filteredData[date] = [];
            }

            if (weather.length > 0) {
              filteredData[date].push({
                weatherHour: weather[0],
                date: time,
                temperature: main,
              });
            }
          });
          setWeatherData(filteredData);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchData();
  }, [coordinates, measurement, saveMeasurement]);

  return { weatherData };
}
