import { ChangeEvent } from "react";

import { UseMeasurementContext } from "../../contexts/MeasurementContext";

import { Measurement } from "../../utils/types";
import { Form, Input, Label } from "./styled";

const measurementValues = ["metric", "imperial"];

export const MeasurementForm = () => {
  const { measurement, saveMeasurement } = UseMeasurementContext();

  const handleUnitChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    if (!measurementValues.includes(currentValue)) return;
    saveMeasurement(currentValue as Measurement);
  };
  return (
    <Form>
      <Input
        type="radio"
        id="metric"
        name="measurement"
        value="metric"
        checked={measurement === "metric"}
        onChange={handleUnitChange}
      />
      <Label htmlFor="metric">°C</Label>
      <Input
        type="radio"
        id="imperial"
        name="measurement"
        value="imperial"
        checked={measurement === "imperial"}
        onChange={handleUnitChange}
      />
      <Label htmlFor="imperial">°F</Label>
    </Form>
  );
};
