import { UseUnitContext } from "../../contexts/UnitContext";
import { WeatherDay } from "../../utils/types";
import WeatherItem from "../WeatherItem";
import { WeatherContainer } from "./styled";

export default function WeatherList({
  weathers,
  isLink = false,
}: {
  weathers: WeatherDay[];
  isLink?: boolean;
}) {
  const { unit } = UseUnitContext();
  return (
    <>
      <WeatherContainer>
        {weathers.map((weather, key) => (
          <WeatherItem
            key={key}
            weather={weather}
            isLink={isLink}
            unit={unit}
          />
        ))}
      </WeatherContainer>
    </>
  );
}
