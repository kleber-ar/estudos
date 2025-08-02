import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import renderWithRouter from "../renderWithRouter";
import App from "../App";

describe("Teste do componente <FavoritePokemon />", () => {
  it("Exibe a mensagem 'No favorite pokemon found' se nenhum for favoritado", () => {
    renderWithRouter(<App />, { route: "/favorites" });

    const message = screen.getByText(/no favorite pokémon found/i);
    expect(message).toBeInTheDocument();
  });

  it("Exibe apenas os Pokémon favoritados", async () => {
    const { user } = renderWithRouter(<App />);

    // 1. Navega para detalhes de um Pokémon
    const detailsLink = screen.getByRole("link", { name: /more details/i });
    await user.click(detailsLink);

    // 2. Marca como favorito
    const favoriteCheckbox = screen.getByRole("checkbox", {
      name: /pokémon favoritado?/i,
    });
    await user.click(favoriteCheckbox);

    // 3. Volta para a página de favoritos
    const favoriteLink = screen.getByRole("link", {
      name: /favorite pokémon/i,
    });
    await user.click(favoriteLink);

    // 4. Verifica se o Pokémon está presente
    const pokemonName = screen.getByText(/pikachu/i); // ou qualquer pokémon default
    expect(pokemonName).toBeInTheDocument();

    // 5. Verifica se a mensagem de "nenhum favorito" NÃO aparece
    const noFavMessage = screen.queryByText(/no favorite pokémon found/i);
    expect(noFavMessage).not.toBeInTheDocument();
  });
});
