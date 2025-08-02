import { screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import About from "../pages/About/About";
import renderWithRouter from "../renderWithRouter";
import "@testing-library/jest-dom";

describe("Teste do componente About", () => {
  it("Verifica se a página contém um heading h2 com o texto About Pokédex", () => {
    renderWithRouter(<About />);

    const heading = screen.getByRole("heading", {
      name: /about pokédex/i,
      level: 2, //level para cada tipo de heading level 1 = h1 etc...
    });

    expect(heading).toBeInTheDocument();
  });

  it("Verifica se a página contém dois parágrafos com texto sobre a Pokédex", () => {
    renderWithRouter(<About />);

    //se quiser pegar sómente os elementos P, mas se ver o conteudo dentro.

    //const paragraphs = container.querySelectorAll('p');
    //expect(paragraphs).toHaveLength(2);

    const paragraphs = screen
      .getAllByText(/pokémon/i)
      .filter((el) => el.tagName === "P");

    expect(paragraphs.length).toBeGreaterThanOrEqual(2);
  });

  it("Verifica se a página contém a imagem da Pokédex com o src correto", () => {
    renderWithRouter(<About />);

    const image = screen.getByRole("img");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png"
    );
  });
});
