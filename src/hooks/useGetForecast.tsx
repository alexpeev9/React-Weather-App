import { useEffect, useState } from "react";
import axios from "axios";

import { getEndpointUrl } from "../utils/helpers";
import useGetCoordinates from "./useGetCoordinates";
import { Measurement } from "../utils/types";

export default function useGetForecast(measurement: Measurement) {
  const { coordinates } = useGetCoordinates();

  const [forecastData, setForeCastData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!coordinates.latitude || !coordinates.longitude) return;
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
  }, [coordinates, measurement]);

  return { forecastData, loading };
}
