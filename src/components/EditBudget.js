import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { BudgetContext } from "../context/BudgetContext";

const schema = yup.object().shape({
  budget: yup.number().typeError("Please add a valid number.").required("Please add a budget number."),
});

const EditBudget = () => {
  const { dispatch } = useContext(BudgetContext);
  const [budget, setBudget] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setBudget(budget);

    reset();

    dispatch({
      type: "EDIT_BUDGET",
      payload: data.budget,
    });
  };

  return (
    <form className="p-5 border-2 m-5 rounded" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h2 className="text-slate-700 dark:text-white font-bold text-xl mb-5">Edit your budget:</h2>
        <input placeholder="Amount" className="w-full px-5 py-3 mt-2 mb-2 border-2 rounded" {...register("budget")} />
        {errors.budget && <span className="text-red-500">{errors.budget.message}</span>}
      </div>

      <button type="submit" className="w-full bg-blue-500 mt-5 hover:bg-blue-700 transition-all rounded p-3 text-lg flex justify-center text-white">
        Update
      </button>
    </form>
  );
};

export default EditBudget;
