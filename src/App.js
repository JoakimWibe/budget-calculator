import EditBudget from "./components/EditBudget";
import BudgetDashboard from "./components/budgetDashboard/BudgetDashboard";
import Expenses from "./components/expenses/Expenses";
import Heading from "./components/layout/Heading";
import { BudgetProvider } from "./context/BudgetContext";

function App() {
  return (
    <BudgetProvider>
      <div className="md:w-2/3 xl:w-1/3 mx-auto font-mono">
        <Heading />
        <BudgetDashboard />
        <EditBudget />
        <Expenses />
      </div>
    </BudgetProvider>
  );
}

export default App;
