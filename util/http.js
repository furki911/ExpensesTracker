import axios from "axios";

export const storeExpense = (expenseData) => {
  axios.post(
    "https://reactnativecourse-7fdca-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json",
    expenseData
  );
};
