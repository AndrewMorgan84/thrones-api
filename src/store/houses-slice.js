import { createSlice } from "@reduxjs/toolkit";

const houseSlice = createSlice({
  name: "house",
  initialState: {
    houses: [],
  },
  reducers: {
    loadHouses(state, action) {
      state.houses = action.payload.houses;
    },
  },
});

export const houseActions = houseSlice.actions;
export default houseSlice.reducer;
