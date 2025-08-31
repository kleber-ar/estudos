import { createContext, ReactNode, useState } from "react";
import { NumericFilter, Order, PlanetsContextType } from "../types";
import { useFetchPlanets } from "../hooks/useFetchPlanets";

export const PlanetsContext = createContext<PlanetsContextType>(null!);

export function PlanetsProvider({ children }: { children: ReactNode }) {
  const { planets, loading, error } = useFetchPlanets();
  const [nameFilter, setNameFilter] = useState("");
  const [numericFilters, setNumericFilters] = useState<NumericFilter[]>([]);
  const [order, setOrder] = useState<Order>({
    column: "population",
    sort: "ASC",
  });

  return (
    <PlanetsContext.Provider
      value={{
        planets,
        loading,
        error,
        nameFilter,
        setNameFilter,
        numericFilters,
        setNumericFilters,
        order,
        setOrder,
      }}
    >
      {children}
    </PlanetsContext.Provider>
  );
}
