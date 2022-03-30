import { useContext } from "react";
import { ExpenseTrackercontext } from "./contextAPI/context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/category";

const useCustomhookTransaction = (title) => {
  console.log(title);
  resetCategories();
  const { transaction } = useContext(ExpenseTrackercontext);
  console.log(transaction);
  const transactionsPerType = transaction.filter((t) => t.type === title);
  console.log(transactionsPerType);
  const total = transactionsPerType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);

    if (category) category.amount += t.amount;
  });

  const filteredCategories = categories.filter((sc) => sc.amount > 0);

  const chartData = {
    datasets: [
      {
        data: filteredCategories.map((c) => c.amount),
        backgroundColor: filteredCategories.map((c) => c.color),
      },
    ],
    labels: filteredCategories.map((c) => c.type),
  };
  console.log(total);
  console.log(chartData);

  return { total, chartData };
};

export default useCustomhookTransaction;
