import React from "react";
import AddExpense from "./AddExpense";
import ExpensesList from "./ExpensesList";

const Expenses = () => {
  return (
    <div className="flex flex-col mx-5 border-2 rounded p-5">
      <ExpensesList />
      <hr className="mb-5" />
      <AddExpense />
    </div>
  );
};

export default Expenses;
