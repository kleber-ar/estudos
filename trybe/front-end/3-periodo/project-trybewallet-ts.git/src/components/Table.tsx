import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux";
import { deleteExpense, startEditExpense } from "../redux/actions";

export default function Table() {
  const expenses = useSelector((state: RootState) => state.wallet.expenses);
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteExpense(id));
  };

  const handleEdit = (id: number) => {
    dispatch(startEditExpense(id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => {
          const {
            id,
            value,
            description,
            currency,
            method,
            tag,
            exchangeRates,
          } = expense;
          const exchangeRate = Number(exchangeRates[currency].ask);
          const currencyName = exchangeRates[currency].name;
          const convertedValue = Number(value) * exchangeRate;

          return (
            <tr key={id}>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{Number(value).toFixed(2)}</td>
              <td>{currencyName}</td>
              <td>{exchangeRate.toFixed(2)}</td>
              <td>{convertedValue.toFixed(2)}</td>
              <td>Real</td>
              <td>
                <button data-testid="edit-btn" onClick={() => handleEdit(id)}>
                  Editar
                </button>
                <button
                  data-testid="delete-btn"
                  onClick={() => handleDelete(id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
