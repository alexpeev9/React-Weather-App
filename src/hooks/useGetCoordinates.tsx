import { useEffect, useState } from "react";

interface Coordinates {
  latitude: number | null;
  longitude: number | null;
}

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
