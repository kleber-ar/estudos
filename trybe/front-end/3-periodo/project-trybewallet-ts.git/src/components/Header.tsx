import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux"; // ajuste o caminho para o seu store

function Header() {
  // pega o email do estado global (reducer de user, por exemplo)
  const email = useSelector((state: RootState) => state.user.email);

  // pega a lista de despesas do estado global (reducer de wallet)
  const expenses = useSelector((state: RootState) => state.wallet.expenses);

  // calcula o total (se já precisar, senão deixa 0 fixo)
  const total = expenses.reduce((acc, expense) => {
    // valor convertido pela cotação (se já houver estrutura)
    const value = Number(expense.value);
    const currency = expense.currency;
    const exchangeRate = Number(expense.exchangeRates[currency].ask);
    return acc + value * exchangeRate;
  }, 0);

  return (
    <header>
      <p data-testid="email-field">{email}</p>
      <p data-testid="total-field">{total.toFixed(2)}</p>
      <p data-testid="header-currency-field">BRL</p>
    </header>
  );
}

export default Header;
