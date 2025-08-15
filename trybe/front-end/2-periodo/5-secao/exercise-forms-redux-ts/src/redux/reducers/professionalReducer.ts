import { AnyAction } from "redux";
import { ADD_PROFESSIONAL_DATA } from "../actions/profissionalActions";

const INITIAL_STATE = {
  resume: "",
  role: "",
  description: "",
};

export default function professionalReducer(
  state = INITIAL_STATE,
  action: AnyAction
) {
  switch (action.type) {
    case ADD_PROFESSIONAL_DATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
