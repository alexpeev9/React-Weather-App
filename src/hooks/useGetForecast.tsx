import { useEffect, useState } from "react";
import axios from "axios";

import { getEndpointUrl } from "../utils/helpers";
import { Coordinates, Measurement } from "../utils/types";
import { UseMeasurementContext } from "../contexts/MeasurementContext";

export default function useGetForecast(
  measurement: Measurement,
  coordinates: Coordinates | null
) {
  const { saveMeasurement } = UseMeasurementContext();
  const [forecastData, setForeCastData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    saveMeasurement(measurement);
    if (!coordinates || !coordinates.latitude || !coordinates.longitude) return;
    setLoading(true);
    axios({
      method: "get",
      url: `${getEndpointUrl(
        coordinates.latitude,
        coordinates.longitude,
        measurement
      )}`,
    })
      .then((res) => {
        setForeCastData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [coordinates, measurement, saveMeasurement]);

  return { forecastData, loading };
}
