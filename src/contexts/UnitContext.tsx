import { createContext, useContext, useState } from "react";

import { getUserUnit, saveUserUnit } from "../utils/helpers";
import { Unit, Props } from "../utils/types";

const UnitContext = createContext<UnitContextType>({
  unit: null,
  saveUnit: () => {},
});

export type UnitContextType = {
  unit: Unit | null;
  saveUnit: (unit: Unit) => void;
};

export function UnitProvider({ children }: Props) {
  const [unit, setUnit] = useState(getUserUnit());

  function saveUnit(unit: Unit) {
    if (!unit) return;

    setUnit(unit);
    saveUserUnit(unit);
  }

  return (
    <UnitContext.Provider
      value={{
        unit,
        saveUnit,
      }}
    >
      {children}
    </UnitContext.Provider>
  );
}

export function UseUnitContext() {
  return useContext(UnitContext);
}
