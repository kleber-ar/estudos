// Neste arquivo você deverá combinar os seus reducers.
// Lembre-se de modificar o tipo ReduxState em src/types.ts caso necessário.
import { combineReducers } from "redux";
import carsReducer from "./carsReducer";
import trafficSignalReducer from "./trafficSignalReducer";

const rootReducer = combineReducers({
  carsReducer,
  trafficSignalReducer,
});

export default rootReducer;
