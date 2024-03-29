import { useEffect, useState } from "react";
import { Coordinates } from "../utils/types";

export default function useGetCoordinates() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCoordinates({
        latitude: position.coords.longitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return { coordinates };
}
