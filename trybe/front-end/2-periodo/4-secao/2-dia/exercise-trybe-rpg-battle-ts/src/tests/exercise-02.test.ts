import { expect, it, vi } from "vitest";
import rollDice from "../service/rollDice";
import rollMultipleDice from "../service/rollMultipleDice";

vi.mock("../service/rollDice");
/*
Aqui estamos criando o mock para a função `rollDice` através do vi.mock.
Dessa forma podemos controlar os retornos do `rollDice` para que
não sejam mais aleatórios
*/

it("testa a função `rollMultipleDice`", () => {
  /*
    Para o primeiro dado, o resultado deverá ser 6.
    Para o segundo dado rolado, o resultado deverá ser 4.
    A partir de agora, não há mais aleatoriedade na função `rollMultipleDice`
  */
  (rollDice as any).mockReturnValueOnce(6).mockReturnValueOnce(4);

  /*
    Como agora sabemos que a função `rollDice` retorna 6 + 4,
    então a função `rollMultipleDice`, quando recebe 2 e 20 como argumentos
    (2 dados de 20 lados), deverá retornar 10
  */
  expect(rollMultipleDice(2, 20)).toBe(10);

  /*
    Vamos testar também que, ao chamar a função `rollMultipleDice` com
    o primeiro argumento = 2 (dois dados), a função `rollDice` deverá
    ser chamada 2 vezes.
  */
  expect(rollDice).toHaveBeenCalledTimes(2);
});
