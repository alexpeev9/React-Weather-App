import { createContext, useContext, useState } from "react";

import { getUserMeasurement, saveUserMeasurement } from "../utils/helpers";
import { Measurement, Props } from "../utils/types";

const MeasurementContext = createContext<MeasurementContextType>({
  measurement: null,
  saveMeasurement: () => {},
});

export type MeasurementContextType = {
  measurement: Measurement | null;
  saveMeasurement: (measurement: Measurement) => void;
};

export function MeasurementProvider({ children }: Props) {
  const [measurement, setMeasurement] = useState(getUserMeasurement());

  function saveMeasurement(measurement: Measurement) {
    if (!measurement) return;

    setMeasurement(measurement);
    saveUserMeasurement(measurement);
  }

  return (
    <MeasurementContext.Provider
      value={{
        measurement,
        saveMeasurement,
      }}
    >
      {children}
    </MeasurementContext.Provider>
  );
}

export function UseMeasurementContext() {
  return useContext(MeasurementContext);
}
