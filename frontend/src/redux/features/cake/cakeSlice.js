import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCake--;
    },
    restocked: (state, action) => {
      state.numOfCake += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { ordered, restocked } = cakeSlice.actions;

export default cakeSlice.reducer;
console.log(cakeSlice.actions.ordered());
