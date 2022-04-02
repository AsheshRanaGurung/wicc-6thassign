import { useContext } from "react";
import { ExpenseTrackercontext } from "./contextAPI/context";

import {
  incomeCategories,
  expenseCategories,
  resetCategories,
} from "./constants/category";

const useCustomhookTransaction = (title) => {
  // console.log(title);
  //title "Income" ho ki  "Expense" ho ya aauxa
  resetCategories();
  const { transaction } = useContext(ExpenseTrackercontext);
  // console.log(transaction);
  const transactionsPerType = transaction.filter((t) => t.type === title);
  //hamele haleko data suppose 2ta income ra 1 expense ko xa vane,ya filter garne
  //t.type Form.js bata pathako xu
  // console.log(transactionsPerType);
  const total = transactionsPerType.reduce(
    (acc, currVal) => (acc += currVal.amount),
    0
  );
  const categories = title === "Income" ? incomeCategories : expenseCategories;

  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    //category.js bata incomeCategories ho vane tya bata 1ta obj aauxa,viceversa
    // console.log(category);
    // console.log("$$$$$$$$$$$$$$$$$$$$$$$$$");
    if (category) category.amount += t.amount;
    // {type: 'Gift aako', amount: 0, color: '#10ac6e'} yastp demo auxa,ya amount 0 ma add garne
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
  // console.log(total);
  // console.log(chartData);

  return { total, chartData };
};

export default useCustomhookTransaction;
