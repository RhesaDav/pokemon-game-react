import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import pokemon from "./reducers/pokemon.reducer";

export const store = createStore(pokemon, applyMiddleware(thunk))

