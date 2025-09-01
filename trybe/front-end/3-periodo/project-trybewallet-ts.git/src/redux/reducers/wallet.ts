import {
  SET_CURRENCIES,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  START_EDIT_EXPENSE,
  FINISH_EDIT_EXPENSE,
} from "../actions";

interface Expense {
  id: number;
  value: string;
  description: string;
  currency: string;
  method: string;
  tag: string;
  exchangeRates: Record<string, any>;
}

interface WalletState {
  currencies: string[];
  expenses: Expense[];
  editingId: number | null; // <- id da despesa que está sendo editada
}

const initialState: WalletState = {
  currencies: [] as string[],
  expenses: [] as Expense[],
  editingId: null,
};

export default function walletReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_CURRENCIES:
      return { ...state, currencies: action.payload };

    case ADD_EXPENSE:
      return { ...state, expenses: [...state.expenses, action.payload] };

    case DELETE_EXPENSE:
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };

    case START_EDIT_EXPENSE:
      return { ...state, editingId: action.payload };

    case FINISH_EDIT_EXPENSE:
      return {
        ...state,
        editingId: null,
        expenses: state.expenses.map((expense) =>
          expense.id === action.payload.id ? action.payload : expense
        ),
      };

    default:
      return state;
  }
}
