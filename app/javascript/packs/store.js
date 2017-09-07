import { compose, createStore } from "redux";
import CombinedReducer from "./reducer";

let finalCreateStore = compose()(createStore);

export default function configureStore() {
  return finalCreateStore(
    CombinedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
