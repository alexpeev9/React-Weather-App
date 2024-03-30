import { useEffect, useState } from "react";
import axios from "axios";

import { getEndpointUrl } from "../utils/helpers";
import { Coordinates, Unit } from "../utils/types";
import { UseUnitContext } from "../contexts/UnitContext";
import { WeatherData, WeatherWeek } from "../utils/types";

export default function useGetWeatherData(
  unit: Unit,
  coordinates: Coordinates | null
) {
  const { saveUnit } = UseUnitContext();
  const [weatherData, setWeatherData] = useState<WeatherWeek | null>(null);

  useEffect(() => {
    async function fetchData() {
      if (!coordinates || !coordinates.latitude || !coordinates.longitude)
        return;

      saveUnit(unit);

      axios({
        method: "get",
        url: `${getEndpointUrl(
          coordinates.latitude,
          coordinates.longitude,
          unit
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
  }, [coordinates, unit, saveUnit]);

  return { weatherData };
}
