import { useContext } from "react";
import { PlanetsContext } from "../context/PlanetsContext";

export default function Table() {
  const { planets, loading, error, nameFilter, numericFilters, order } =
    useContext(PlanetsContext);

  if (loading) return <h1>Carregando planetas...</h1>;
  if (error) return <h1>Erro: {error}</h1>;

  let filteredPlanets = planets;

  // Filtro de nome (opcional)
  if (nameFilter) {
    filteredPlanets = filteredPlanets.filter((planet) =>
      planet.name.includes(nameFilter)
    );
  }

  // Filtros numéricos
  if (numericFilters.length > 0) {
    numericFilters.forEach((f) => {
      filteredPlanets = filteredPlanets.filter((p) => {
        const value = Number((p as any)[f.column]);
        switch (f.comparison) {
          case "maior que":
            return value > f.value;
          case "menor que":
            return value < f.value;
          case "igual a":
            return value === f.value;
        }
      });
    });
  }

  // Ordenação
  if (order.column) {
    filteredPlanets.sort((a, b) => {
      const aValue = (a as any)[order.column];
      const bValue = (b as any)[order.column];

      // Valores "unknown" sempre vão para o final
      if (aValue === "unknown") return 1;
      if (bValue === "unknown") return -1;

      const aNum = Number(aValue);
      const bNum = Number(bValue);

      if (order.sort === "ASC") return aNum - bNum;
      return bNum - aNum; // DESC
    });
  }

  if (filteredPlanets.length === 0) return <h1>Nenhum planeta encontrado</h1>;

  const headers = Object.keys(planets[0]);

  return (
    <table border={1} cellPadding={6}>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.slice(0, 10).map((planet, index) => (
          <tr key={index}>
            {headers.map((header) => (
              <td key={header} style={{ textAlign: "center" }}>
                {header === "name" ? (
                  <span data-testid="planet-name">
                    {(planet as any)[header]}
                  </span>
                ) : (
                  (planet as any)[header]
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
