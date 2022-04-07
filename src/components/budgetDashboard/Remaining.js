import React, { useContext } from "react";
import { BudgetContext } from "../../context/BudgetContext";

const Remaining = () => {
  const { expenses, budget } = useContext(BudgetContext);

  const sumOfExpenses = expenses.reduce((total, item) => {
    return (total = total + item.amount);
  }, 0);

  return (
    <div className="text-xl">
      <p>Money Remaining: {sumOfExpenses > budget ? 0 : budget - sumOfExpenses}</p>
    </div>
  );
};

export default Remaining;
