import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

export type Measurement = "metric" | "imperial" | null;

export type Coordinates = {
  latitude: number | null;
  longitude: number | null;
};

export type WeatherInfo = {
  main: string;
  icon: string;
  description: string;
  time: string;
};

export type WeatherListInfo = {
  dt_txt: string;
  weather: WeatherInfo[];
};

export type WeatherList = {
  city: {
    name: string;
    country: string;
  };
  list: WeatherListInfo[];
};

export type WeatherListData = {
  [date: string]: Array<WeatherInfo>;
};

export type WeatherData = {
  city: {
    name: string;
    country: string;
  };
  weatherList: WeatherListData;
};

export type WeatherInfoList = {
  date: string;
  weather: WeatherInfo;
};
