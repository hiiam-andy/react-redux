import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitReducer from "./toolkitSlice";

const rootReducer = combineReducers({
  toolkit: toolkitReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
