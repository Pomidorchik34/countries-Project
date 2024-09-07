import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { useGetId } from "./useGetId";

const reducers = combineReducers({
  id: useGetId,
});
export const store = createStore(reducers, composeWithDevTools());
