import { useEffect, useState } from "react";
import { Coordinates } from "../utils/types";
import { textMessage } from "../utils/constants";

export default function useGetCoordinates() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [message, setMessage] = useState<string>(textMessage.coords);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      // Success callback function
      (position) => {
        // Setting coordinates from geolocation API
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      // Error callback function
      () => {
        setMessage(textMessage.coords);
      }
    );
  }, []);

  return { coordinates, message };
}
