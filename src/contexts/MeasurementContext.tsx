import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { getUserMeasurement } from "../utils/helpers";
import { Measurement, Props } from "../utils/types";

const MeasurementContext = createContext<MeasurementContextType>({
  measurementData: null,
  setMeasurementData: () => {},
});

export type MeasurementContextType = {
  measurementData: Measurement | null;
  setMeasurementData: Dispatch<SetStateAction<Measurement | null>>;
};

export function MeasurementProvider({ children }: Props) {
  const [measurementData, setMeasurementData] = useState(getUserMeasurement());
  // TODO: save measure
  // localStorage.setItem(LS_NAME, measurement);
  return (
    <MeasurementContext.Provider
      value={{
        measurementData,
        setMeasurementData,
      }}
    >
      {children}
    </MeasurementContext.Provider>
  );
}

export function UseMeasurementContext() {
  return useContext(MeasurementContext);
}
