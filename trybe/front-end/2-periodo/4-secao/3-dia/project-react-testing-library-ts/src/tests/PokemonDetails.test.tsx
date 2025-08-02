import renderWithRouter from "../renderWithRouter";
import App from "../App";
import { screen } from "@testing-library/react";

describe("Componente <PokemonDetails />", () => {
  it("exibe as informações detalhadas do Pokémon selecionado", async () => {
    const { user, container } = renderWithRouter(<App />);

    // Clica no link "More details" do primeiro Pokémon
    const link = screen.getByRole("link", { name: /more details/i });
    await user.click(link);

    const name = screen.getByTestId("pokemon-name").textContent;

    // Verifica se está na página de detalhes
    const heading = screen.getByRole("heading", {
      level: 2,
      name: `${name} Details`,
    });
    expect(heading).toBeInTheDocument();

    // O link "More details" não deve estar presente na página de detalhes
    const linkAgain = screen.queryByRole("link", { name: /more details/i });
    expect(linkAgain).not.toBeInTheDocument();

    // Verifica se existe um heading "Summary"
    const summaryHeading = screen.getByRole("heading", {
      level: 2,
      name: /summary/i,
    });
    expect(summaryHeading).toBeInTheDocument();

    // Verifica se existe o parágrafo com o resumo
    const paragraph = container.querySelector("p");
    expect(paragraph?.textContent?.length).toBeGreaterThan(0);
  });

  it("exibe as localizações do Pokémon com mapas", async () => {
    const { user, container } = renderWithRouter(<App />);

    const link = screen.getByRole("link", { name: /more details/i });
    await user.click(link);

    const name = screen.getByTestId("pokemon-name").textContent;

    // Verifica o título da seção de localizações
    const locationHeading = screen.getByRole("heading", {
      level: 2,
      name: `Game Locations of ${name}`,
    });
    expect(locationHeading).toBeInTheDocument();

    // Verifica se há imagens de localizações com o alt correto
    const locationImages = screen.getAllByRole("img", {
      name: `${name} location`,
    });

    expect(locationImages.length).toBeGreaterThan(0);

    locationImages.forEach((img) => {
      expect(img).toHaveAttribute("src");
      expect(img.getAttribute("src")?.length).toBeGreaterThan(0);
      expect(img).toHaveAttribute("alt", `${name} location`);
    });

    // Verifica se os nomes das localizações estão na tela
    const locationElements = container.querySelectorAll("em");
    expect(locationElements.length).toBeGreaterThan(0);
  });

  it("permite favoritar e desfavoritar um Pokémon pela página de detalhes", async () => {
    const { user } = renderWithRouter(<App />);

    const link = screen.getByRole("link", { name: /more details/i });
    await user.click(link);

    const checkbox = screen.getByRole("checkbox");
    const label = screen.getByLabelText(/pokémon favoritado\?/i);

    expect(label).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    // Favorita
    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    // Desfavorita
    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});
