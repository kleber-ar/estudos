// configure aqui sua store

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/user";
import walletReducer from "./reducers/wallet";

const rootReducer = combineReducers({
  user: userReducer,
  wallet: walletReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export default store;
