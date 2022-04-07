import React, { useContext } from "react";
import { BudgetContext } from "../../context/BudgetContext";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = () => {
  const { expenses } = useContext(BudgetContext);

  return (
    <div>
      <h2 className="font-bold text-2xl text-slate-700 dark:text-white mb-5">Expenses</h2>
      <hr className="mb-5" />
      {expenses.length === 0 ? (
        <div className="mb-5 text-slate-700 dark:text-white">No expenses added yet.</div>
      ) : (
        <ul>
          {expenses.map((item) => {
            return <ExpenseItem key={item.name} name={item.name} amount={item.amount} currency={item.currency} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default ExpensesList;
