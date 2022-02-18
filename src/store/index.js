import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "./ui-slice";
import housesSliceReducer from "./houses-slice";

const store = configureStore({
  reducer: { ui: uiSliceReducer, houses: housesSliceReducer },
});

export default store;
