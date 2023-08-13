import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction } from "./store/customerReducer";
import { removeCustomerAction } from "./store/customerReducer";
import { fetchCustomers } from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };
  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className={"app"}>
      <h1>{cash}</h1>
      <div>
        <button onClick={() => addCash(Number(prompt()))}>Пополнить</button>
        <button onClick={() => getCash(Number(prompt()))}>Снять</button>
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => dispatch(fetchCustomers())}>
          Получить из базы
        </button>
      </div>
      {customers.length > 0 ? (
        <ul>
          {customers.map((customer) => {
            return (
              <li onClick={() => removeCustomer(customer)} key={customer.id}>
                {customer.name}
              </li>
            );
          })}
        </ul>
      ) : (
        <div>Никого</div>
      )}
    </div>
  );
}

export default App;
