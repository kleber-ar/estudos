import { AnyAction } from "redux";
import { ADD_PERSONAL_DATA } from "../actions/personalActions";

const INITIAL_STATE = {
  name: "",
  email: "",
  cpf: "",
  address: "",
  city: "",
  uf: "",
};

export default function personalReducer(
  state = INITIAL_STATE,
  action: AnyAction
) {
  switch (action.type) {
    case ADD_PERSONAL_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
