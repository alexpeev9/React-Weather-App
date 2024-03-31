import { Link } from "react-router-dom";
import { WeatherListParams } from "../../utils/types";
import {
  H3,
  ImageSection,
  P,
  Section,
  Span,
  TextLink,
  WeatherContainer,
  WeatherText,
} from "./styled";
import { textPage, textUnitMetrics } from "../../utils/constants";
import Image from "../Image";

export default function WeatherItem({
  weather,
  unit,
  isLink,
}: WeatherListParams) {
  const { date, temperature, weatherHour } = weather;

  const card = (
    <WeatherContainer data-test={`weather-item-${isLink ? "link" : "data"}`}>
      <ImageSection>
        <Image icon={weatherHour.icon} alt={weatherHour.main} />
        <WeatherText>
          {textPage.weatherInfo}
          <Span>{weatherHour.main}</Span>
        </WeatherText>
      </ImageSection>
      <Section>
        <H3>{date}</H3>
        <P>
          {textPage.weatherTemp}
          <Span data-test="temperature-value">
            {temperature.temp}{" "}
            {(unit === "metric" || unit === null) && textUnitMetrics.metric}
            {unit === "imperial" && textUnitMetrics.imperial}
          </Span>
        </P>
        {isLink && <TextLink>{textPage.button}</TextLink>}
      </Section>
    </WeatherContainer>
  );

  return isLink ? <Link to={`/day/${date}`}>{card}</Link> : card;
}
