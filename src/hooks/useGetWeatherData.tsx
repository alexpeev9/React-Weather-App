import { useEffect, useState } from "react";
import axios from "axios";

import { getEndpointUrl } from "../utils/helpers";
import {
  Coordinates,
  Measurement,
  WeatherData,
  WeatherList,
  WeatherListData,
} from "../utils/types";
import { UseMeasurementContext } from "../contexts/MeasurementContext";

export default function useGetWeatherData(
  measurement: Measurement,
  coordinates: Coordinates | null
) {
  const { saveMeasurement } = UseMeasurementContext();
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

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
          const weatherResponse = res.data as WeatherList;
          const filteredData: WeatherListData = {};

          weatherResponse.list.forEach((obj) => {
            const dateArray = obj.dt_txt.split(" ");
            const date = dateArray[0];
            const time = dateArray[1];

            if (!filteredData[date]) {
              filteredData[date] = [];
            }

            if (obj.weather.length > 0) {
              filteredData[date].push({
                ...obj.weather[0],
                time,
              });
            }
          });

          setWeatherData({
            city: weatherResponse.city,
            weatherList: filteredData,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }

    fetchData();
  }, [coordinates, measurement, saveMeasurement]);

  return { weatherData };
}
