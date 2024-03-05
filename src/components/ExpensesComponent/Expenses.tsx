import { useState } from "react";
import { useLocalStorage } from "../../utilities/locallStorage";
import "./expenses.css";
import { easeInOut, motion } from "framer-motion";
import ExpensesRow from "./ExpenseRow";

type TExpense = {
  category: string;
  value: number;
};

function Expenses() {
  const [expenses, setExpenses] = useState<TExpense[]>([]);

  const { getItem, setItem, removeItem } = useLocalStorage("value");

  console.log(expenses);

  return (
    <motion.main
      initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "0%" }}
      transition={{ duration: 0.5, ease: easeInOut }}
      className="Expenses"
    >
      <div style={{ overflow: "hidden" }}>
        {/* <motion.h1
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "0%" }}
          transition={{ delay: 0.5, duration: 0.5, ease: easeInOut }}
        >
          Enter your Expenses
        </motion.h1> */}
        <div className="expense-table">
          <h1>Enter your expense</h1>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expenses.length > 0 &&
                expenses.map((el, idx) => (
                  <ExpensesRow id={idx} obj={el} setExpenses={setExpenses} />
                ))}
              <ExpensesRow setExpenses={setExpenses} />
            </tbody>
          </table>
        </div>
      </div>
    </motion.main>
  );
}

export default Expenses;
