import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../redux";
import {
  fetchCurrencies,
  fetchAndAddExpense,
  finishEditExpense,
} from "../redux/actions";

export default function WalletForm() {
  const currencies = useSelector((state: RootState) => state.wallet.currencies);
  const editingId = useSelector((state: RootState) => state.wallet.editingId);
  const expenses = useSelector((state: RootState) => state.wallet.expenses);

  const dispatch: ThunkDispatch<RootState, unknown, AnyAction> = useDispatch();

  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [method, setMethod] = useState("Dinheiro");
  const [tag, setTag] = useState("Alimentação");

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  // Quando entrar em modo de edição, popular os campos
  useEffect(() => {
    if (editingId !== null) {
      const expenseToEdit = expenses.find((exp) => exp.id === editingId);
      if (expenseToEdit) {
        setValue(expenseToEdit.value);
        setDescription(expenseToEdit.description);
        setCurrency(expenseToEdit.currency);
        setMethod(expenseToEdit.method);
        setTag(expenseToEdit.tag);
      }
    }
  }, [editingId, expenses]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingId !== null) {
      // Atualizar despesa existente
      const expenseToEdit = expenses.find((exp) => exp.id === editingId);
      if (expenseToEdit) {
        const updatedExpense = {
          ...expenseToEdit,
          value,
          description,
          currency,
          method,
          tag,
        };
        dispatch(finishEditExpense(updatedExpense));
      }
    } else {
      // Adicionar nova despesa
      await dispatch(
        fetchAndAddExpense({ value, description, currency, method, tag })
      );
    }

    // Resetar campos
    setValue("");
    setDescription("");
    setCurrency("USD");
    setMethod("Dinheiro");
    setTag("Alimentação");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        data-testid="value-input"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Valor"
        required
      />
      <input
        data-testid="description-input"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descrição"
        required
      />
      <select
        data-testid="currency-input"
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        {currencies.map((cur: string) => (
          <option key={cur} value={cur}>
            {cur}
          </option>
        ))}
      </select>
      <select
        data-testid="method-input"
        value={method}
        onChange={(e) => setMethod(e.target.value)}
      >
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
      <select
        data-testid="tag-input"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      >
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
      <button type="submit">
        {editingId !== null ? "Editar despesa" : "Adicionar despesa"}
      </button>
    </form>
  );
}
