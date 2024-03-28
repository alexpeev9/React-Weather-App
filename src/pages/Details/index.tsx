import { useParams } from "react-router-dom";
import { Fragment } from "react";
import useGetWeatherForDay from "../../hooks/useGetWeatherForDay";

export default function Details() {
  const { number } = useParams();
  const weatherDetails = useGetWeatherForDay(number);
  return (
    weatherDetails && (
      <>
        {weatherDetails &&
          weatherDetails.map((item, key) => (
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
