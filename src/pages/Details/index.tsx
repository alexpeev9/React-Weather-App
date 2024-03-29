import { useParams } from "react-router-dom";
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
        {date}
        <br />
        {weatherDetails.map((item, key) => (
          <Fragment key={key}>
            {item.time} - {item.description} - {item.main}
            <img
              src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
              alt={item.icon}
            />
            <br />
          </Fragment>
        ))}
      </>
    )
  );
}
