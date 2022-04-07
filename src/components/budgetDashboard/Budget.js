import { useContext } from "react";
import { BudgetContext } from "../../context/BudgetContext";

const Budget = () => {
  const { budget } = useContext(BudgetContext);
  return (
    <div className="text-xl flex items-center">
      <p className="mr-2">Budget: {budget}</p>
    </div>
  );
};

export default Budget;
