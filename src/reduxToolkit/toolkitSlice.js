import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
  name: "some_name",
  initialState: {
    count: 0,
    todos: ["1", "2", "3", "4", "5"],
  },
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      state.count = state.count - 1;
    },
    addTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state) {
      state.todos.pop();
    },
  },
});

export default toolkitSlice.reducer;
export const { increment, decrement, addTodo, removeTodo } =
  toolkitSlice.actions;
