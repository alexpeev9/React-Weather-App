import { ReactNode } from "react";

export type Props = {
  children: ReactNode;
};

export type Measurement = "metric" | "imperial" | null;

export type WeatherInfo = {
  main: string;
  icon: string;
  description: string;
};

export type WeatherData = {
  dt_txt: string;
  weather: WeatherInfo[];
};

export type WeatherList = {
  city: {
    name: string;
    country: string;
  };
  list: WeatherData[];
};
