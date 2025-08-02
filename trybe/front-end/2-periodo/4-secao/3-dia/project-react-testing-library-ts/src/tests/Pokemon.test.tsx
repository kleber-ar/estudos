import { screen } from "@testing-library/react";
import renderWithRouter from "../renderWithRouter";
import Pokemon from "../components/Pokemon/Pokemon";
import { PokemonType } from "../types";
import App from "../App";

// Exemplo de Pokémon que pode vir da Pokédex
const pikachu: PokemonType = {
  id: 25,
  name: "Pikachu",
  type: "Electric",
  averageWeight: {
    value: "6.0",
    measurementUnit: "kg",
  },
  image: "https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png",
  moreInfo: "https://bulbapedia.bulbagarden.net/wiki/Pikachu_(Pokémon)",
  summary:
    "This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat.",
  foundAt: [
    {
      location: "Kanto Viridian Forest",
      map: "https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png",
    },
  ],
};

describe("Componente <Pokemon />", () => {
  it("renderiza um card com as informações corretas do Pokémon", () => {
    renderWithRouter(
      <Pokemon pokemon={pikachu} isFavorite={false} showDetailsLink={false} />
    );

    // Nome
    const name = screen.getByText(/pikachu/i);
    expect(name).toBeInTheDocument();

    // Tipo
    const type = screen.getByTestId("pokemon-type");
    expect(type).toHaveTextContent(/electric/i);

    // Peso médio
    const weight = screen.getByText(/Average weight:/i);
    expect(weight).toHaveTextContent("Average weight: 6.0 kg");

    // Imagem
    const image = screen.getByRole("img", { name: /pikachu sprite/i });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", pikachu.image);
    expect(image).toHaveAttribute("alt", "Pikachu sprite");
  });

  it("possui um link para exibir detalhes do Pokémon com o href correto", () => {
    renderWithRouter(
      <Pokemon pokemon={pikachu} isFavorite={false} showDetailsLink />
    );

    const link = screen.getByRole("link", { name: /more details/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", `/pokemon/${pikachu.id}`);
  });

  it("redireciona para a página de detalhes ao clicar no link", async () => {
    const { user } = renderWithRouter(<App />);

    const nameEl = screen.getByTestId("pokemon-name");
    const name = nameEl.textContent!;
    const link = screen.getByRole("link", { name: /more details/i });

    await user.click(link);

    const detailsEl = screen.getByRole("heading", {
      level: 2,
      name: `${name} Details`,
    });

    expect(detailsEl).toBeInTheDocument();
    expect(window.location.pathname).toBe(link.getAttribute("href"));
  });

  it("exibe o ícone de estrela nos pokémons favoritados", () => {
    renderWithRouter(<Pokemon pokemon={pikachu} isFavorite showDetailsLink />);

    const starIcon = screen.getByRole("img", {
      name: /pikachu is marked as favorite/i,
    });

    expect(starIcon).toBeInTheDocument();
    expect(starIcon).toHaveAttribute("src", "/star-icon.png");
    expect(starIcon).toHaveAttribute("alt", "Pikachu is marked as favorite");
  });
});
