export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  created: string;
  edited: string;
  url: string;
};

export type NumericFilter = {
  column:
    | "population"
    | "orbital_period"
    | "diameter"
    | "rotation_period"
    | "surface_water";
  comparison: "maior que" | "menor que" | "igual a";
  value: number;
};

export type PlanetsContextType = {
  planets: Planet[];
  loading: boolean;
  error: string | null;
  nameFilter: string;
  setNameFilter: (value: string) => void;
  numericFilters: NumericFilter[];
  setNumericFilters: (filters: NumericFilter[]) => void;
  order: Order;
  setOrder: (order: Order) => void;
};

export type StoredPlanets = {
  planets: Planet[];
  savedAt: number;
};

export type Order = {
  column: keyof Planet;
  sort: "ASC" | "DESC";
};
