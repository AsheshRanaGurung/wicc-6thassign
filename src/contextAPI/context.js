import React, { useReducer, createContext } from "react";
import contextReducer from "./ContextReducer";
import { toast } from "react-toastify";

const initialState = [];
export const ExpenseTrackercontext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transaction, dispatch] = useReducer(contextReducer, initialState);

  //action creator
  const deleteTransacation = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
    toast("Transaction deleted Successfully");
  };
  const addTransacation = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
    toast("Transaction added Successfully");
  };

  return (
    <ExpenseTrackercontext.Provider
      value={{
        deleteTransacation,
        addTransacation,
        transaction,
      }}
    >
      {children}
    </ExpenseTrackercontext.Provider>
  );
};
