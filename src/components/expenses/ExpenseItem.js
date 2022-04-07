import { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { BudgetContext } from "../../context/BudgetContext";

const ExpenseItem = (props) => {
  const { dispatch } = useContext(BudgetContext);

  const handleDeleteItem = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.name,
    });
  };

  return (
    <li className="flex justify-between items-center mb-5 text-xl text-slate-700 dark:text-white">
      <p className="font-bold">{props.name}</p>
      <div className="flex items-center">
        <p className="mr-5">{props.amount}</p>
        <button>
          <BsFillTrashFill className="hover:cursor-pointer" onClick={handleDeleteItem} />
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
