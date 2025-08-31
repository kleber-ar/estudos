import { useContext } from "react";
import { PlanetsContext } from "../context/PlanetsContext";

export default function NameFilter() {
  const { nameFilter, setNameFilter } = useContext(PlanetsContext);

  return (
    <input
      type="text"
      data-testid="name-filter"
      placeholder="Filtrar planetas por nome"
      value={nameFilter}
      onChange={(e) => setNameFilter(e.target.value)}
    />
  );
}
