import { Link, useParams } from "react-router-dom";
import { Fragment } from "react";
import useGetWeatherForDay from "../../hooks/useGetWeatherForDay";

export default function Details() {
  const { date } = useParams();
  const weatherDetailsObject = useGetWeatherForDay(date);

  if (!date) {
    return <>Not a valid date</>;
  }

  const weatherDetails = weatherDetailsObject && weatherDetailsObject[date];

  return (
    weatherDetails && (
      <>
        {date} - <Link to="/">Home</Link>
        <br />
        {weatherDetails.map((item, key) => (
          <Fragment key={key}>
            {item.date} - {item.temperature.temp}
            <img
              src={`https://openweathermap.org/img/wn/${item.weatherHour.icon}@2x.png`}
              alt={item.weatherHour.icon}
            />
            <br />
          </Fragment>
        ))}
      </>
    )
  );
}
