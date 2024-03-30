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
    <WeatherContainer>
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
          <Span>
            {temperature.temp} {(unit === "metric" || unit === null) && "°C"}
            {unit === "imperial" && "°F"}
          </Span>
        </P>
        {isLink && <TextLink>Details</TextLink>}
      </Section>
    </WeatherContainer>
  );

  return isLink ? <Link to={`/day/${date}`}>{card}</Link> : card;
}
