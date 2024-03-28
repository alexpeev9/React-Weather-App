import { ChangeEvent } from "react";

import { MeasurementContextType } from "../../../contexts/MeasurementContext";

import { Measurement } from "../../../utils/types";

const measurementValues = ["metric", "imperial"];

export const MeasurementForm = ({
  measurement,
  saveMeasurement,
}: MeasurementContextType) => {
  const handleUnitChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    if (!measurementValues.includes(currentValue)) return;
    saveMeasurement(currentValue as Measurement);
  };
  return (
    <form>
      <input
        type="radio"
        id="metric"
        name="measurement"
        value="metric"
        checked={measurement === "metric"}
        onChange={handleUnitChange}
      />
      <label htmlFor="metric">Metric</label>
      <input
        type="radio"
        id="imperial"
        name="measurement"
        value="imperial"
        checked={measurement === "imperial"}
        onChange={handleUnitChange}
      />
      <label htmlFor="imperial">Imperial</label>
    </form>
  );
};
