import { screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import App from "../App";
import { renderWithRouter } from "./utils/renderWithRouter";
import "@testing-library/jest-dom";

describe("Teste de funcionalidade", () => {
  afterEach(() => vi.clearAllMocks());

  it("Pesquisar valor", async () => {
    const { user } = renderWithRouter(<App />);

    const searchInput = screen.getByRole("textbox", { name: /Digimon/i });
    expect(searchInput).toHaveValue("");

    await user.type(searchInput, "Agumon");
    expect(searchInput).toHaveValue("Agumon");
  });

  it("Render inicia sem digimon", () => {
    renderWithRouter(<App />);

    const digimon = screen.queryByTestId("digimonName");
    expect(digimon).not.toBeInTheDocument();
  });

  it("Pesquisar Digimon", async () => {
    const digimonMock = [
      {
        name: "Agumon",
        level: "Rookie",
        img: "https://digimon.shadowsmith.com/img/agumon.jpg",
      },
    ];

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(digimonMock),
      })
    ) as any;

    const { user } = renderWithRouter(<App />);

    expect(global.fetch).toBeCalledTimes(0);

    const searchInput = screen.getByRole("textbox", { name: /Digimon/i });
    const button = screen.getByRole("button", { name: /Search Digimon/i });

    await user.type(searchInput, "Agumon");
    await user.click(button);

    const digimonLevel = await screen.findByText("Level: Rookie");
    expect(digimonLevel).toBeInTheDocument();

    const digimonName = await screen.findByText(/Agumon/i);
    expect(digimonName).toBeInTheDocument();

    const digimonImage = await screen.findByText("Agumon");
    expect(digimonImage).toBeInTheDocument();

    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith(
      "https://digimon-api.vercel.app/api/digimon/name/Agumon"
    );
  });

  it("Busca por um digimon inexistente", async () => {
    const ErrorMsg = "Pikachu is not a Digimon in our database.";

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ ErrorMsg }),
      })
    ) as any;

    const { user } = renderWithRouter(<App />);

    const searchInput = screen.getByRole("textbox", { name: /Digimon/i });
    const button = screen.getByRole("button", { name: /Search Digimon/i });

    await user.type(searchInput, "Pikachu");
    await user.click(button);

    await screen.findByText("Pikachu is not a Digimon in our database.");

    expect(global.fetch).toBeCalledTimes(1);
  });

  it("Pesquisa sem valor não deve fazer request", async () => {
    const { user } = renderWithRouter(<App />);

    const searchInput = screen.getByRole("textbox", { name: /Digimon/i });
    expect(searchInput).toHaveValue("");

    const button = screen.getByRole("button", { name: /Search Digimon/i });
    await user.click(button);

    expect(global.fetch).toBeCalledTimes(0);
  });

  it("A busca falha (erro no servidor)", async () => {
    vi.spyOn(global, "fetch");

    await (global.fetch as any).mockRejectedValue(
      new Error("Oops! Algo de errado não está certo!")
    );

    vi.spyOn(global.console, "log");

    const { user } = renderWithRouter(<App />);

    const searchInput = screen.getByRole("textbox", { name: /Digimon/i });
    const button = screen.getByRole("button", { name: /Search Digimon/i });

    await user.type(searchInput, "Teste");
    await user.click(button);

    await waitFor(() => {
      expect(global.fetch).toBeCalledTimes(1);

      expect(console.log).toHaveBeenCalledTimes(1);

      expect(console.log).toBeCalledWith(
        "Erro ao fazer a requisição: Error: Oops! Algo de errado não está certo!"
      );
    });
  });
});
