import { render, screen } from "@testing-library/react";
// import userEvent from '@testing-library/user-event';
import App from "../App";
import Item from "../Item";
import userEvent from "@testing-library/user-event";

// src/test/exercise-two.test.tsx
describe("Testa a aplicação, e o input", () => {
  test("Testa a adição de vários itens a aplicação", async () => {
    const listTodo = ["Realizar CR", "Ler Post no Medium"];

    render(<App />);

    // Começamos selecionando nosso input e nosso botão.
    const inputTask = screen.getByLabelText("Tarefa:");
    const btnAdd = screen.getByText("Adicionar");

    // Então, pegamos os valores de nosso array de tarefas 'listTodo' e, para cada um desses valores, disparamos os eventos de digitar no input e de clicar no botão com a biblioteca 'userEvent'.

    await userEvent.type(inputTask, listTodo[0]);
    await userEvent.click(btnAdd);

    await userEvent.type(inputTask, listTodo[1]);
    await userEvent.click(btnAdd);

    // Por fim, iteramos mais uma vez sobre nosso array. Dessa vez, vamos verificar se, para cada um dos valores, nós podemos selecioná-los com a query 'getByText' e encontrá-los em tela com o matcher 'toBeInTheDocument'
    listTodo.forEach((task) => {
      const currentTask = screen.getByText(task);
      expect(currentTask).toBeInTheDocument();
    });
  });
});

describe("Testa o Componente item", () => {
  test("Ao receber uma string como props, ela precisa aparecer na tela.", () => {
    // Vamos renderizar apenas o componente que queremos testar aqui
    // De acordo com nosso componente, devemos passar algum valor para a prop 'content'. Neste caso, estamos passando a frase "Limpar a casa"
    // Após a renderização, verificamos se é possível encontrar a frase em tela, usando nossa query 'getByText' e nosso matcher 'toBeInTheDocument'

    render(<Item content="Limpar a casa" />);

    expect(screen.getByText("Limpar a casa")).toBeInTheDocument();
  });
});
