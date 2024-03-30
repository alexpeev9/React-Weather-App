import { useEffect, useState } from "react";
import { Coordinates } from "../utils/types";

const text = {
  default:
    "To provide accurate information, please grant permission to access your device's location.",
};

export default function useGetCoordinates() {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [message, setMessage] = useState<string>(text.default);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinates({
          latitude: position.coords.longitude,
          longitude: position.coords.longitude,
        });
      },
      () => {
        setMessage(text.default);
      }
    );
  }, []);

  return { coordinates, message };
}
