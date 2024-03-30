import { Link } from "react-router-dom";

import { WeatherDay } from "../../utils/types";
import {
  H3,
  Image,
  ImageSection,
  P,
  Section,
  Span,
  TextLink,
  WeatherContainer,
  WeatherText,
} from "./styled";
import { Unit } from "../../utils/types";
import { textUnitMetrics } from "../../utils/constants";

export default function WeatherItem({
  weather,
  unit,
  isLink,
}: {
  weather: WeatherDay;
  unit: Unit;
  isLink: boolean;
}) {
  const { date, temperature, weatherHour } = weather;

  const card = (
    <WeatherContainer data-test={`weather-item-${isLink ? "link" : "data"}`}>
      <ImageSection>
        <Image
          src={`https://openweathermap.org/img/wn/${weatherHour.icon}@2x.png`}
          alt={weatherHour.main}
        />
        <WeatherText>
          Weather: <Span>{weatherHour.main}</Span>
        </WeatherText>
      </ImageSection>

      <Section>
        <H3>{date}</H3>
        <P>
          Temperature:{" "}
          <Span data-test="temperature-value">
            {temperature.temp}{" "}
            {(unit === "metric" || unit === null) && textUnitMetrics.metric}
            {unit === "imperial" && textUnitMetrics.imperial}
          </Span>
        </P>
        {isLink && <TextLink>Details</TextLink>}
      </Section>
    </WeatherContainer>
  );

  return isLink ? <Link to={`/day/${date}`}>{card}</Link> : card;
}
