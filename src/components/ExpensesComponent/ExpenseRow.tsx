import { useState } from "react";
import { labels } from "../../data/data";

type TExpense = {
  category: string;
  value: number;
  description?: string;
};

type TSetExpesne = {
  id: number;
  obj: TExpense;
  setExpenses: (value: TExpense[]) => TExpense[];
};

export default function ExpensesRow({ setExpenses, obj, id }: TSetExpesne) {
  const [expense, setExpense] = useState<TExpense>();

  const handlerSelect = (e: any) => {
    const value = e.target.value;
    setExpense((e): TExpense => ({ ...e, category: value }));
  };

  const handlerAmount = (e: any) => {
    const value = +e.target.value;
    setExpense((e): TExpense => ({ ...e, value: value }));
  };

  const handlerDescription = (e: any) => {
    const value = e.target.value;
    setExpense((e): TExpense => ({ ...e, description: value }));
  };

  return (
    <tr>
      <td>{id}</td>
      <td>
        <input
          onChange={handlerAmount}
          value={expense?.value}
          type="number"
          placeholder="Enter Amount"
        />
      </td>
      <td>
        <select value={expense?.category} onChange={handlerSelect}>
          {labels.map((el: string, idx: number) => (
            <option key={idx}>{el}</option>
          ))}
        </select>
      </td>
      <td>
        <input
          onChange={handlerDescription}
          type="text"
          value={expense?.description}
          placeholder="Enter description"
        />
      </td>
      <td>
        <button
          onClick={() => {
            setExpenses((e: any) => [...e, expense]);
            setExpense(null);
          }}
        >
          Buttton
        </button>
      </td>
    </tr>
  );
}
