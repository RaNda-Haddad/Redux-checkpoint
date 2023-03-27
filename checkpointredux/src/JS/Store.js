import { createStore } from "redux";
import todoReducer from "../JS/Reducer"

const store = createStore(todoReducer)

export default store;