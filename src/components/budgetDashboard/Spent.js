import React, { useContext } from "react";
import { BudgetContext } from "../../context/BudgetContext";

export const Spent = () => {
  const { expenses } = useContext(BudgetContext);

  const sumOfExpenses = expenses.reduce((total, item) => {
    return (total += item.amount);
  }, 0);

  return (
    <div className="text-xl">
      <p>Money spent: {sumOfExpenses}</p>
    </div>
  );
};

export default Spent;
