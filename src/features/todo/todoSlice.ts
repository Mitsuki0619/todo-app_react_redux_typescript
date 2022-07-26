import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { log } from "console";
import { RootState, AppThunk } from "../../app/store";

export interface TodoState {
  id: number;
  title: string;
  isDone: boolean;
}

const initialState: TodoState[] = [
  {
    id: 0,
    title: "todo!",
    isDone: false,
  },
  {
    id: 1,
    title: "やること！",
    isDone: false,
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo(state, action: PayloadAction<TodoState>) {
      return [...state, action.payload];
    },
    toggleTodo(state, action: PayloadAction<TodoState>) {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, isDone: !todo.isDone };
        } else {
          return todo;
        }
      });
    },
    deleteTodo(state, action: PayloadAction<TodoState>) {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const selectTodo = (state: RootState) => state.todo;
export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
