import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import React,  { useState } from 'react';
import './components/Expenses/NewExpense.js';
import NewExpense from './components/Expenses/NewExpense.js';


const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


const App = () => {
const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
const addExpenseHandler = (expense) =>{
  setExpenses((prevExpenses) => {
    return [expense, ...prevExpenses];
  });
};

//First argument = The Element you should created, Second Element = Object , Third Element = The Content Beetwen Div,
// return React.createElement(
//   'div', 
//   {}, 
//   // React.createElement('h2', {}, 'Lets Get Start!'), 
//   React.createElement(Expenses, {items: expenses})
//   );


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
