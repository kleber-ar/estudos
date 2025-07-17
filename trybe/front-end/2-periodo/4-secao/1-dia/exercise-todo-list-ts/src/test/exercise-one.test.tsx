import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

// Isolamos o texto da descrição da tarefa em uma constante para evitar erros de lint
const TASK_DESCRIPTION = "Beber água!";

describe("Testando a aplicação, testando o botão e sua funcionalidade", () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);

    // Primeiro, vamos selecionar o botão com a query 'getByText'
    // Em seguida, verificamos se o botão está na tela com o matcher 'toBeInTheDocument'
    // Por fim, verificamos se a propriedade 'type' é igual a 'button' com o matcher 'toBe'

    const buttonAdd: HTMLButtonElement = screen.getByRole("button", {
      name: /adicionar/i,
    });
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd.type).toBe("button");
  });

  test('Ao clicar no botão "Adicionar" a task deve ser adicionada na tela', async () => {
    render(<App />);

    // Vamos selecionar o input e o botão com as queries 'getByLabelText' e 'getByText', e então adicionamos um valor no input através da biblioteca 'userEvent'
    // Testamos se a tarefa ainda não foi inserida na tela, uma vez que ela só deve aparecer após apertarmos o botão
    // Disparamos o clique no botão, e então verificamos que a tarefa agora aparece na tela
    // Por fim, conferimos que o input está limpo após a inserção da tarefa

    const inputTask = screen.getByLabelText("Tarefa:");
    const buttonAdd = screen.getByRole("button", { name: /adicionar/i });
    await userEvent.type(inputTask, TASK_DESCRIPTION);
    expect(screen.queryByText(TASK_DESCRIPTION)).not.toBeInTheDocument();
    await userEvent.click(buttonAdd);
    expect(screen.getByText(TASK_DESCRIPTION)).toBeInTheDocument();
    expect(inputTask).toHaveValue("");
  });
});
