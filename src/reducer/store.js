import { createStore } from "redux";
import CounterReducer from "./counterReducer";

const store = createStore(CounterReducer);

export default store;
