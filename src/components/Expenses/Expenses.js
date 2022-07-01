import React, { useState } from 'react';
import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
const Expenses = (prop) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterchangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
    return ( 
      <div>
    <Card className='expenses'>
    <ExpensesFilter selected ={filteredYear} onChangeFilter={filterchangeHandler}/>
        {prop.items.map((expense) => (
        <ExpenseItem 
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />
        ))}
    </Card>
    </div>
    );
   
};

export default Expenses;
