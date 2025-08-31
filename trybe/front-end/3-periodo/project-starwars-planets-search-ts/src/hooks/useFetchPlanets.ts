import { useEffect, useState } from "react";
import { Planet, StoredPlanets } from "../types";

const STORAGE_KEY = "planets";
const TTL = 1000 * 60 * 60; // 1 hora em milissegundos

export function useFetchPlanets() {
  const [planets, setPlanets] = useState<Planet[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const { planets, savedAt }: StoredPlanets = JSON.parse(stored);
      // verifica se os dados ainda são válidos
      if (Date.now() - savedAt < TTL) {
        return planets;
      } else {
        localStorage.removeItem(STORAGE_KEY); // expirou
      }
    }
    return [];
  });

  const [loading, setLoading] = useState(planets.length === 0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPlanets() {
      // se já tem no localStorage válido, não busca de novo
      if (planets.length > 0) return;

      try {
        setLoading(true);
        const response = await fetch("https://swapi.info/api/planets");
        if (!response.ok) throw new Error("Erro ao buscar planetas");
        const data = await response.json();

        const planetsWithoutResidents: Planet[] = data.map(
          ({ residents, ...rest }: any) => rest
        );

        setPlanets(planetsWithoutResidents);
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            planets: planetsWithoutResidents,
            savedAt: Date.now(),
          })
        );
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPlanets();
  }, [planets]);

  return { planets, loading, error };
}
