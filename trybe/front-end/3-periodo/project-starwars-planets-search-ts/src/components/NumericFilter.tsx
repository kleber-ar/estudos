import { useContext, useState } from "react";
import { PlanetsContext } from "../context/PlanetsContext";
import { NumericFilter as NumericFilterType, Order } from "../types";

export default function NumericFilter() {
  const { numericFilters, setNumericFilters, order, setOrder } =
    useContext(PlanetsContext);

  const [localFilter, setLocalFilter] = useState<NumericFilterType>({
    column: "population",
    comparison: "maior que",
    value: 0,
  });
  const [inputValue, setInputValue] = useState("0");

  const [localOrder, setLocalOrder] = useState<Order>(order);

  // Adiciona um filtro
  const handleClick = () => {
    setNumericFilters([
      ...numericFilters,
      { ...localFilter, value: Number(inputValue) },
    ]);
    // Reseta o filtro local para a próxima seleção
    const remainingColumns = [
      "population",
      "orbital_period",
      "diameter",
      "rotation_period",
      "surface_water",
    ].filter((col) => !numericFilters.some((f) => f.column === col));
    setLocalFilter({
      column: remainingColumns[0] as any,
      comparison: "maior que",
      value: 0,
    });
    setInputValue("0");
  };

  // Remove um filtro específico
  const handleRemove = (index: number) => {
    setNumericFilters(numericFilters.filter((_, i) => i !== index));
  };

  // Remove todos os filtros
  const handleRemoveAll = () => setNumericFilters([]);

  // Aplica a ordenação
  const handleSort = () => {
    setOrder(localOrder);
  };

  // Colunas disponíveis no dropdown de filtro
  const availableColumns = [
    "population",
    "orbital_period",
    "diameter",
    "rotation_period",
    "surface_water",
  ].filter((col) => !numericFilters.some((f) => f.column === col));

  return (
    <div style={{ marginBottom: "1rem" }}>
      {/* FILTRO NUMÉRICO */}
      <div style={{ marginBottom: "1rem" }}>
        <h4>Filtro numérico:</h4>
        <select
          data-testid="column-filter"
          value={localFilter.column}
          onChange={(e) =>
            setLocalFilter({ ...localFilter, column: e.target.value as any })
          }
        >
          {availableColumns.map((col) => (
            <option key={col} value={col}>
              {col}
            </option>
          ))}
        </select>

        <select
          data-testid="comparison-filter"
          value={localFilter.comparison}
          onChange={(e) =>
            setLocalFilter({
              ...localFilter,
              comparison: e.target.value as any,
            })
          }
        >
          <option value="maior que">maior que</option>
          <option value="menor que">menor que</option>
          <option value="igual a">igual a</option>
        </select>

        <input
          type="text"
          data-testid="value-filter"
          value={inputValue}
          onFocus={() => setInputValue("")}
          onChange={(e) => setInputValue(e.target.value)}
          size={12}
        />

        <button data-testid="button-filter" onClick={handleClick}>
          Filtrar
        </button>
        <button
          onClick={handleRemoveAll}
          style={{ marginLeft: "0.5rem", color: "red" }}
        >
          Remover todos
        </button>

        <div style={{ marginTop: "1rem" }}>
          <h5>Filtros aplicados:</h5>
          {numericFilters.length === 0 && <p>Nenhum filtro aplicado</p>}
          <ul>
            {numericFilters.map((f, index) => (
              <li key={index} data-testid="filter">
                {f.column} {f.comparison} {f.value}
                <button
                  onClick={() => handleRemove(index)}
                  style={{ marginLeft: "0.5rem", color: "red" }}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ORDENAÇÃO */}
      <div>
        <h4>Ordenar planetas:</h4>
        <select
          data-testid="column-sort"
          value={localOrder.column}
          onChange={(e) =>
            setLocalOrder({ ...localOrder, column: e.target.value as any })
          }
        >
          {[
            "population",
            "orbital_period",
            "diameter",
            "rotation_period",
            "surface_water",
          ].map((col) => (
            <option key={col} value={col}>
              {col}
            </option>
          ))}
        </select>

        <label>
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            name="sort"
            value="ASC"
            checked={localOrder.sort === "ASC"}
            onChange={(e) =>
              setLocalOrder({
                ...localOrder,
                sort: e.target.value as "ASC" | "DESC",
              })
            }
          />
          Ascendente
        </label>

        <label>
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            name="sort"
            value="DESC"
            checked={localOrder.sort === "DESC"}
            onChange={(e) =>
              setLocalOrder({
                ...localOrder,
                sort: e.target.value as "ASC" | "DESC",
              })
            }
          />
          Descendente
        </label>

        <button
          data-testid="column-sort-button"
          onClick={handleSort}
          style={{ marginLeft: "0.5rem" }}
        >
          Ordenar
        </button>
      </div>
    </div>
  );
}
