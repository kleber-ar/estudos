import React, { useState } from "react";

type Props = {
  addTodo: (todo: string) => void;
};

function InputTodo({ addTodo }: Props) {
  const [textTodo, setTextTodo] = useState("");

  const changeTextTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextTodo(e.target.value);
  };

  const addItem = () => {
    addTodo(textTodo);
    setTextTodo("");
  };

  return (
    <section className="InputTodo">
      <label htmlFor="inputTodo">
        Tarefa:
        <input
          id="inputTodo"
          type="text"
          value={textTodo}
          onChange={changeTextTodo}
        />
      </label>
      <button type="button" disabled={textTodo === ""} onClick={addItem}>
        Adicionar
      </button>
    </section>
  );
}
export default InputTodo;
