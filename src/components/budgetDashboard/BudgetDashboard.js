import Budget from "./Budget";
import Remaining from "./Remaining";
import Spent from "./Spent";

const BudgetDashboard = () => {
  return (
    <div className="flex flex-col gap-5 p-5 items-center mx-5 bg-slate-700 dark:bg-white rounded text-white dark:text-slate-700">
      <Budget />
      <Spent />
      <Remaining />
    </div>
  );
};

export default BudgetDashboard;
