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
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      if (!coordinates || !coordinates.latitude || !coordinates.longitude)
        return;
      setLoading(true);

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
            // Boolean to filter 6th day as per requirement
            const isExceed = Object.keys(filteredData).length < 5;
            // Get date and hours
            const dateArray = dt_txt.split(" ");
            const date = dateArray[0];
            const time = dateArray[1];

            if (!filteredData[date] && isExceed) {
              filteredData[date] = [];
            }

            if (filteredData[date] && weather.length > 0) {
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
        })
        .finally(() => {
          setLoading(false);
        });
    }

    fetchData();
  }, [coordinates, unit, saveUnit]);

  return { weatherData, loading };
}
