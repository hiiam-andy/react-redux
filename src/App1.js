import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reduxToolkit/toolkitReducer";
import { addTodo, removeTodo } from "./reduxToolkit/toolkitSlice";

const addAsyncTodo = () => {
  return async (dispatch) => {
    setTimeout(() => {
      dispatch(addTodo("ASYNC TODO"));
    }, 2000);
  };
};

export default function App1() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.toolkit.count);
  const todos = useSelector((state) => state.toolkit.todos);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(removeTodo())}>Удалить последний</button>
      <button onClick={() => dispatch(addTodo(prompt()))}>Добавить</button>
      <button onClick={() => dispatch(addAsyncTodo())}>Аинхронно</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
