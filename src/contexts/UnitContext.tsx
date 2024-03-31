import { createContext, useContext, useState } from "react";
import { getUserUnit, saveUserUnit } from "../utils/helpers";
import { Unit, Props, UnitContextType } from "../utils/types";

const UnitContext = createContext<UnitContextType>({
  unit: null,
  saveUnit: () => {},
});

export function UnitProvider({ children }: Props) {
  // Get unit value from localeStorage
  const [unit, setUnit] = useState(getUserUnit());

  // Update unit value and localeStorage
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
