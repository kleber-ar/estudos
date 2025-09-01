// Esse reducer será responsável por tratar as informações da pessoa usuária

import { SET_EMAIL } from "../actions";

export interface UserState {
  email: string;
}

const initialState: UserState = {
  email: "",
};

export default function userReducer(
  state = initialState,
  action: any
): UserState {
  switch (action.type) {
    case SET_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
}
