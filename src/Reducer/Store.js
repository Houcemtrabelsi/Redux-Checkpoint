import { createStore } from "redux";
import combineReducer from "../Reducer/index";

export default createStore(
  combineReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
