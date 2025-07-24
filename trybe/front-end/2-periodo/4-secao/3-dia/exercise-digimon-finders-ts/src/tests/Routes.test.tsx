import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";
import { renderWithRouter } from "./utils/renderWithRouter";
import "@testing-library/jest-dom";

describe("Teste de rotas", () => {
  it("teste de render da aplicação", () => {
    renderWithRouter(<App />);

    const headingEl = screen.getByRole("heading", {
      name: "Search Digimon",
    });

    expect(headingEl).toBeInTheDocument();

    const aboutLink = screen.getByRole("link", { name: "About" });
    const searchLink = screen.getByRole("link", { name: "Search Digimon" });

    expect(aboutLink).toBeInTheDocument();
    expect(searchLink).toBeInTheDocument();
  });

  it("Teste se a rota ABOUT funciona", async () => {
    const { user } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole("link", { name: "About" });
    expect(aboutLink).toBeInTheDocument();

    await user.click(aboutLink);

    const headingEl = screen.getByRole("heading", {
      name: "About",
    });

    expect(headingEl).toBeInTheDocument();
  });

  it("Teste da rota NOTFOUND", async () => {
    renderWithRouter(<App />, { route: "/xablau" });

    const headingEl = screen.getByRole("heading", {
      name: "Page Not Found",
    });

    expect(headingEl).toBeInTheDocument();
  });
});
