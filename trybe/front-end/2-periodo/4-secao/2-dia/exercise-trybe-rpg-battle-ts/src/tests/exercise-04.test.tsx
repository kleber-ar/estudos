import { render, screen } from "@testing-library/react";
import App from "../App";
import { expect, it, vi } from "vitest";

it("testa a requisição para a API", async () => {
  /*
    Primeiro criamos um objeto com as informações que queremos
    que sejam retornadas pelo nosso mock.
    Nesse caso, estamos criando um objeto para o personagem Chapolin Colorado
  */
  const mockedCharacters = [
    {
      id: 1,
      name: "Chapolin Colorado",
      source: "Chaves",
      defensePoints: 60,
    },
  ];

  /*
    Agora estamos criando o mock para o global.fetch,
    usando primeiro a vi.spyOn e depois a função mockResolvedValue
    Repare que é necessário usar a função mockResolvedValue duas vezes,
    pois a função fetch retorna primeiro um objeto que possui um método `.json`
    e o método `.json` retorna o resultado da API.
  */
  vi.spyOn(global, "fetch");
  (global.fetch as any).mockResolvedValue({
    json: vi.fn().mockResolvedValue(mockedCharacters),
  });

  /*
    Renderizando a aplicação
  */
  render(<App />);

  /*
    Pegando o elemento `h3` que tem o nome do personagem.
    Repare que usamos o `findByRole`
  */
  const enemyEl = await screen.findByRole("heading", {
    name: "Chapolin Colorado",
  });

  /*
    Verifica que ele está sendo renderizado na tela
  */
  expect(enemyEl).toBeInTheDocument();
});
