import { UseMeasurementContext } from "../contexts/MeasurementContext";
import { Measurement } from "../utils/types";

const LS_NAME = "measurement";

export default function useGetMeasurement(measurement: Measurement) {
  const { setMeasurementData } = UseMeasurementContext();
  if (!measurement) return;
  localStorage.setItem(LS_NAME, measurement);
  setMeasurementData(measurement);
}
