import { useEffect, useState } from "react";
import { Coordinates } from "../utils/types";

export default function useGetCoordinates() {
  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  } as Coordinates);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          latitude: position.coords.longitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error.message);
      }
    );
  }, []);

  return { coordinates };
}
