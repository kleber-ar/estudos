import { combineReducers } from "redux";
import personalReducer from "./personalReducer";
import professionalReducer from "./professionalReducer";

const rootReducer = combineReducers({
  personalData: personalReducer,
  professionalData: professionalReducer,
});

export default rootReducer;
