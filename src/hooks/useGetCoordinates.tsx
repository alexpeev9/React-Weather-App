import { useEffect, useState } from "react";
import { Coordinates } from "../utils/types";
import { textCoordinates } from "../utils/constants";

export default function useGetCoordinates() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [message, setMessage] = useState<string>(textCoordinates.default);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        setMessage(textCoordinates.default);
      }
    );
  }, []);

  return { coordinates, message };
}
