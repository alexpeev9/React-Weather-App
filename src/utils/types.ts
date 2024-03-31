import { ReactNode } from "react";

// API Types

export type WeatherData = {
  list: WeatherDayData[];
};

export type WeatherDayData = {
  dt_txt: string;
  main: WeatherTemperature;
  weather: weatherHourData[];
};

export type WeatherTemperature = {
  feels_like: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
};

export type weatherHourData = {
  main: string;
  icon: string;
  description: string;
};

// Client Types

export type WeatherWeek = {
  [date: string]: WeatherDay[];
};

export type WeatherDay = {
  date: string;
  temperature: WeatherTemperature;
  weatherHour: weatherHourData;
};

export type UnitContextType = {
  unit: Unit | null;
  saveUnit: (unit: Unit) => void;
};

export type WeatherContextType = {
  weather: WeatherWeek | null;
  loading: boolean;
};

export type WeatherListParams = {
  weather: WeatherDay;
  unit: Unit;
  isLink: boolean;
};

export type WeatherDayParams = {
  weathers: WeatherDay[];
  isLink?: boolean;
};

export type ImageParams = { icon: string; alt: string };

export type Props = {
  children: ReactNode;
};

export type Unit = "metric" | "imperial" | null;

export type Coordinates = {
  latitude: number | null;
  longitude: number | null;
};
