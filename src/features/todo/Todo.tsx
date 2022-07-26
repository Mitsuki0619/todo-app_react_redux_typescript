import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { selectTodo, addTodo, toggleTodo, deleteTodo } from "./todoSlice";

export const Todo = () => {
  const todo = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={() => {
          dispatch(
            addTodo({ id: todo.length, title: inputValue, isDone: false })
          );
        }}
      >
        add
      </button>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            <input type="checkbox" onChange={() => dispatch(toggleTodo(item))} checked={item.isDone}/>
            <div>{item.title}</div>
            <button onClick={() => dispatch(deleteTodo(item))}>✘</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
