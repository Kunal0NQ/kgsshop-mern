import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      // console.log(action.payload)
    },
    removeUser(state, action) {
      console.log("hii" + action.payload)
      // state.pop(action.payload)
      // let userIndexNum = state.indexOf(action.payload)
      // state.splice(userIndexNum, 1)
      state.splice(action.payload, 1);
    },
    clearAllUsers(state, action) {
      return [];
    },
  },
});

console.log(userSlice.actions.addUser());
const { actions, reducer } = userSlice;
export const { addUser, removeUser, clearAllUsers } = actions;
export default reducer;
