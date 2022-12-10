import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    setTodos(_, action) {
      return action.payload;
    },
  },
});

export default todosSlice.reducer;
export const { setTodos } = todosSlice.actions;
