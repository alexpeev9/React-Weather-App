import { Fragment } from "react/jsx-runtime";
import useGetWeatherForWeek from "../../../hooks/useGetWeatherForWeek";
import { Link } from "react-router-dom";

export default function WeatherList() {
  const weathers = useGetWeatherForWeek();

  return (
    weathers &&
    weathers.map((item, key) => (
      <Fragment key={key}>
        <Link to={`/day/${item.date}`}>
          | {item.date} - {item.weather.main} - {item.weather.main} -{" "}
          {item.weather.icon}
        </Link>
        <br />
      </Fragment>
    ))
  );
}
