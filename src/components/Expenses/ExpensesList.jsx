import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.filteredItems.length === 0) {
    return (
      <>
        <h2 className="expenses-list__fallback">All time expenses</h2>
        <ul className="expenses-list">
          {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              className="expenses"
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
        </ul>
      </>
    );
  }

  return (
    <ul className="expenses-list">
      {props.filteredItems.map((expense) => (
        <ExpenseItem
          key={expense.id}
          className="expenses"
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
