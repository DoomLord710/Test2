import React from "react";
import './NewExpense.css';
import './ExpenseForm';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (prop) =>{
    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        prop.onAddExpense(expenseData); 

    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );

};

export default NewExpense;