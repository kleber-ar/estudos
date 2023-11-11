import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import characterReducer from "./characterReducer";



const store = createStore(characterReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;