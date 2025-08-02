import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";
import renderWithRouter from "../renderWithRouter";
import "@testing-library/jest-dom";

describe("Teste do componente <Pokedex />", () => {
  it('deve conter um heading h2 com o texto "Encountered Pokémon"', () => {
    renderWithRouter(<App />);
    const heading = screen.getByRole("heading", {
      level: 2,
      name: /encountered pokémon/i,
    });
    expect(heading).toBeInTheDocument();
  });

  it('deve exibir o próximo pokémon ao clicar no botão "Próximo Pokémon"', async () => {
    const { user } = renderWithRouter(<App />);

    const botaoProximo = screen.getByRole("button", {
      name: /próximo pokémon/i,
    });

    expect(botaoProximo).toBeInTheDocument();

    const pokemonInicial = screen.getByTestId("pokemon-name").textContent;

    // Clica até voltar ao primeiro pokémon
    let anterior = pokemonInicial;
    for (let i = 0; i < 8; i++) {
      await user.click(botaoProximo);
      const atual = screen.getByTestId("pokemon-name").textContent;
      expect(atual).not.toBe(anterior);
      anterior = atual;
    }

    // Ao clicar novamente, deve voltar ao primeiro pokémon
    await user.click(botaoProximo);
    const pokemonFinal = screen.getByTestId("pokemon-name").textContent;
    expect(pokemonFinal).toBe(pokemonInicial);
  });

  it("deve mostrar apenas um pokémon por vez", () => {
    renderWithRouter(<App />);
    const pokemons = screen.getAllByTestId("pokemon-name");
    expect(pokemons).toHaveLength(1);
  });

  it('deve conter botões de filtro por tipo, com data-testid="pokemon-type-button"', () => {
    renderWithRouter(<App />);
    const botoesTipo = screen.getAllByTestId("pokemon-type-button");
    const tipos = botoesTipo.map((btn) => btn.textContent);

    expect(botoesTipo).toHaveLength(7);
    expect(tipos).toEqual([
      "Electric",
      "Fire",
      "Bug",
      "Poison",
      "Psychic",
      "Normal",
      "Dragon",
    ]);
  });

  it("deve circular apenas pokémon do tipo selecionado ao clicar em um botão de filtro", async () => {
    const { user } = renderWithRouter(<App />);

    const botaoPsychic = screen.getByRole("button", { name: /psychic/i });
    await user.click(botaoPsychic);

    const tipo = screen.getByTestId("pokemon-type").textContent;
    expect(tipo).toBe("Psychic");

    const botaoProximo = screen.getByRole("button", {
      name: /próximo pokémon/i,
    });
    await user.click(botaoProximo);

    const novoTipo = screen.getByTestId("pokemon-type").textContent;
    expect(novoTipo).toBe("Psychic");
  });

  it('deve conter um botão com texto "All" sempre visível', () => {
    renderWithRouter(<App />);

    const botaoAll = screen.getByRole("button", { name: /^all$/i });
    expect(botaoAll).toBeInTheDocument();
  });

  it('deve resetar os filtros ao clicar no botão "All"', async () => {
    const { user } = renderWithRouter(<App />);

    const botaoFire = screen.getByRole("button", { name: /fire/i });
    await user.click(botaoFire);

    const tipoAntes = screen.getByTestId("pokemon-type").textContent;
    expect(tipoAntes).toBe("Fire");

    const botaoAll = screen.getByRole("button", { name: /^all$/i });
    await user.click(botaoAll);

    const tipoDepois = screen.getByTestId("pokemon-type").textContent;
    expect(tipoDepois).not.toBe("Fire");
    expect(tipoDepois).toBe("Electric");
  });

  it('deve carregar com o filtro "All" ativo', () => {
    renderWithRouter(<App />);

    const botaoAll = screen.getByRole("button", { name: /^all$/i });
    expect(botaoAll).toBeInTheDocument();

    const pokemons = screen.getAllByTestId("pokemon-name");
    expect(pokemons).toHaveLength(1); // Confirma que algum pokémon está sendo exibido
  });
});
