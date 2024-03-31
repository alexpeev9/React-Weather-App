import { UseUnitContext } from "../../contexts/UnitContext";
import { WeatherDayParams } from "../../utils/types";
import WeatherItem from "../WeatherItem";
import { WeatherContainer } from "./styled";

export default function WeatherList({
  weathers,
  isLink = false,
}: WeatherDayParams) {
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
