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
  // Accessing unit context for saving selected unit
  const { saveUnit } = UseUnitContext();
  // State for storing weather data
  const [weatherData, setWeatherData] = useState<WeatherWeek | null>(null);
  // State for loading status
  const [loading, setLoading] = useState<boolean>(false);

  // Effect to fetch weather data when coordinates or unit change
  useEffect(() => {
    async function fetchData() {
      // Return if coordinates are not available
      if (!coordinates || !coordinates.latitude || !coordinates.longitude)
        return;

      // Setting loading state to true
      setLoading(true);

      // Saving selected unit in context
      saveUnit(unit);

      // Making API request to fetch weather data
      await axios({
        method: "get",
        url: `${getEndpointUrl(
          coordinates.latitude,
          coordinates.longitude,
          unit
        )}`,
      })
        .then((res) => {
          // Type assertion for weather data response
          const weatherResponse = res.data as WeatherData;
          // Object to store sorted weather data by date
          const sortedData: WeatherWeek = {};

          // Iterating over weather data to sort by date
          weatherResponse.list.forEach((weatherWeek) => {
            const { dt_txt, weather, main } = weatherWeek;
            // Boolean to filter 6th day as per requirement
            const isExceed = Object.keys(sortedData).length < 5;

            // Split date and time
            const dateArray = dt_txt.split(" ");
            const date = dateArray[0];
            const time = dateArray[1];

            // Create array for each date and not exceeding 5 days
            if (!sortedData[date] && isExceed) {
              sortedData[date] = [];
            }

            // Populate weather for each date
            if (sortedData[date] && weather.length > 0) {
              sortedData[date].push({
                weatherHour: weather[0],
                date: time,
                temperature: main,
              });
            }
          });
          // Setting sorted weather data
          setWeatherData(sortedData);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          // Setting loading state to false
          setLoading(false);
        });
    }

    fetchData();
  }, [coordinates, unit, saveUnit]);

  return { weatherData, loading };
}
