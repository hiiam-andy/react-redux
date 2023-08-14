import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction, removeUserAction } from "./redux/store/userReducer";
import { fetchUsers } from "./redux/asyncActions/users";

export default function App() {
  const sum = useSelector((state) => state.sum.sum);
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const addSum = (num) => {
    dispatch({ type: "ADD_SUM", payload: num });
  };
  const getSum = (num) => {
    dispatch({ type: "GET_SUM", payload: num });
  };
  const addUser = (name) => {
    const user = {
      name,
      id: Date.now(),
    };
    dispatch(addUserAction(user));
  };

  const removeUser = (user) => {
    dispatch(removeUserAction(user.id));
  };

  return (
    <div>
      <h1>{sum}</h1>
      <button onClick={() => addSum(1)}>+</button>
      <button onClick={() => getSum(1)}>-</button>
      <button onClick={() => addUser(prompt())}>Добавить</button>
      <button onClick={() => dispatch(fetchUsers())}>
        Получить пользователей
      </button>
      {users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li onClick={() => removeUser(user)} key={user.id}>
              {user.name}
            </li>
          ))}
        </ul>
      ) : (
        <h4>Нет пользователей</h4>
      )}
    </div>
  );
}
