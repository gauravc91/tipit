import { combineReducers } from "redux";
import AppReducer from "./reducers/AppReducer";

const CombinedReducer = combineReducers({ AppReducer });

export default CombinedReducer;
