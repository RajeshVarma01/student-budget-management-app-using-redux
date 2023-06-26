import { createStore } from "redux";
import { crudReducer } from "./reducer";

const store = createStore(crudReducer)

export default store