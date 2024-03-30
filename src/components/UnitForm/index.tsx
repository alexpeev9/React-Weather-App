import { ChangeEvent } from "react";
import { UseUnitContext } from "../../contexts/UnitContext";
import { Unit } from "../../utils/types";
import { Form, Input, Label } from "./styled";
import { textUnitMetrics } from "../../utils/constants";

const unitValues = ["metric", "imperial"];

export const UnitForm = () => {
  const { unit, saveUnit } = UseUnitContext();

  const handleUnitChange = (event: ChangeEvent<HTMLInputElement>) => {
    const currentValue = event.target.value;
    if (!unitValues.includes(currentValue)) return;
    saveUnit(currentValue as Unit);
  };
  return (
    <Form>
      <Input
        type="radio"
        id="metric"
        name="unit"
        value="metric"
        checked={unit === "metric" || unit === null}
        onChange={handleUnitChange}
        data-test={"input-metric"}
      />
      <Label htmlFor="metric">{textUnitMetrics.metric}</Label>
      <Input
        type="radio"
        id="imperial"
        name="unit"
        value="imperial"
        checked={unit === "imperial"}
        onChange={handleUnitChange}
        data-test={"input-imperial"}
      />
      <Label htmlFor="imperial">{textUnitMetrics.imperial}</Label>
    </Form>
  );
};
