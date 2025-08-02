import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";
import renderWithRouter from "../renderWithRouter";
import "@testing-library/jest-dom";

describe("Teste do componente App", () => {
  it("Verifica se há links fixos na barra de navegação", () => {
    renderWithRouter(<App />);

    const homeLink = screen.getByRole("link", { name: /home/i });
    const aboutLink = screen.getByRole("link", { name: /about/i });
    const favoriteLink = screen.getByRole("link", {
      name: /favorite pokémon/i,
    });

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(favoriteLink).toBeInTheDocument();
  });

  it("Verifica se direciona para o /HOME", async () => {
    const { user } = renderWithRouter(<App />);

    const homeLink = screen.getByRole("link", { name: /home/i });
    await user.click(homeLink);

    const homeText = screen.getByText(/encountered pokémon/i);

    expect(homeText).toBeInTheDocument();
  });

  it("Verifica se direciona para o /ABOUT", async () => {
    const { user } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole("link", { name: /about/i });
    await user.click(aboutLink);

    const aboutText = screen.getByText(/about pokédex/i);

    expect(aboutText).toBeInTheDocument();
  });

  it("Verifica se direciona para o /FAVORITE...", async () => {
    const { user } = renderWithRouter(<App />);

    const favoriteLink = screen.getByRole("link", {
      name: /favorite pokémon/i,
    });
    await user.click(favoriteLink);

    const favText = screen.getByRole("heading", { name: /Favorite Pokémon/i });

    expect(favText).toBeInTheDocument();
  });

  it("Redireciona para página /NOT FOUND", () => {
    renderWithRouter(<App />, { route: "/pagina-404" });

    expect(
      screen.getByRole("heading", { name: /page requested not found/i })
    ).toBeInTheDocument();
  });
});
