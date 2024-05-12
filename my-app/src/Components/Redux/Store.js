

import { combineReducers } from "redux";
import { createStore } from "redux";
import { reducer } from "./Reducer";

const rootReducer = combineReducers({
  reducer,
})

let store = createStore(rootReducer)

export default store