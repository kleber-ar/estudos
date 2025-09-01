// Coloque aqui suas actions

export const SET_EMAIL = "SET_EMAIL";
export const SET_CURRENCIES = "SET_CURRENCIES";
export const ADD_EXPENSE = "ADD_EXPENSE";
export const DELETE_EXPENSE = "DELETE_EXPENSE";
export const START_EDIT_EXPENSE = "START_EDIT_EXPENSE";
export const FINISH_EDIT_EXPENSE = "FINISH_EDIT_EXPENSE";

export function setEmail(email: string) {
  return {
    type: SET_EMAIL,
    payload: email,
  };
}

export const setCurrencies = (currencies: string[]) => ({
  type: SET_CURRENCIES,
  payload: currencies,
});

export const addExpense = (expense: any) => ({
  type: ADD_EXPENSE,
  payload: expense,
});

export const deleteExpense = (id: number) => ({
  type: DELETE_EXPENSE,
  payload: id,
});

export const startEditExpense = (id: number) => ({
  type: START_EDIT_EXPENSE,
  payload: id,
});

export const finishEditExpense = (updatedExpense: any) => ({
  type: FINISH_EDIT_EXPENSE,
  payload: updatedExpense,
});

// Thunk para buscar moedas da API
export const fetchCurrencies = () => async (dispatch: any) => {
  const res = await fetch("https://economia.awesomeapi.com.br/json/all");
  const data = await res.json();
  const currencies = Object.keys(data).filter((key) => key !== "USDT");
  dispatch(setCurrencies(currencies));
};

// Thunk para adicionar despesa com exchangeRates atualizadas
export const fetchAndAddExpense =
  (expenseData: any) => async (dispatch: any, getState: any) => {
    const res = await fetch("https://economia.awesomeapi.com.br/json/all");
    const exchangeRates = await res.json();
    const state = getState();
    const nextId = state.wallet.expenses.length;
    const expense = {
      id: nextId,
      ...expenseData,
      exchangeRates,
    };
    dispatch(addExpense(expense));
  };
