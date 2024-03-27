import { useEffect, useState } from "react";
import axios from "axios";

import getEndpointUrl from "../utils/helpers";
import useGetCoordinates from "./useGetCoordinates";

export default function useGetForecast() {
  const { coordinates } = useGetCoordinates();

  const [forecastData, setForeCastData] = useState(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!coordinates.latitude || !coordinates.longitude) return;

    axios({
      method: "get",
      url: `${getEndpointUrl(coordinates.latitude, coordinates.longitude)}`,
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
  }, [coordinates]);

  return { forecastData, loading };
}
