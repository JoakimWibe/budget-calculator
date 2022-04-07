import { IoMdAdd } from "react-icons/io";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { BudgetContext } from "../../context/BudgetContext";

const schema = yup.object().shape({
  name: yup.string().required("Please enter a name for the expense."),
  amount: yup.number().typeError("Please add a valid number.").required("Please enter an amount."),
});

const AddExpense = () => {
  const { dispatch } = useContext(BudgetContext);

  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    setName(name);
    setAmount(amount);
    reset();

    dispatch({
      type: "ADD_EXPENSE",
      payload: data,
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-slate-700 text-2xl dark:text-white font-bold">Add an expense</h2>
      <div className="my-5">
        <input className="w-full px-5 py-3 mb-2 border-2 rounded" placeholder="Name" {...register("name")} />
        {errors.name && <span className="text-red-500">{errors.name.message}</span>}
      </div>
      <div className="my-5">
        <input className="w-full px-5 py-3 border-2 mb-2 rounded" placeholder="Amount" {...register("amount")} />
        {errors.amount && <span className="text-red-500">{errors.amount.message}</span>}
      </div>

      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 transition-all rounded p-3 text-3xl flex justify-center text-white">
        <IoMdAdd />
      </button>
    </form>
  );
};

export default AddExpense;
