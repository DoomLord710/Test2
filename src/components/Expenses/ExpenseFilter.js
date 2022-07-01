import './ExpenseFilter.css';
import React from 'react';

const ExpensesFilter = (prop) => {
    const dropdownchangeHandler = (event) => {
        console.log(event.target.value);
    };
    return(
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filtered By Year</label>
                <select value={prop.selected} onChange={dropdownchangeHandler}>
                    <option value={'2022'}>2022</option>
                    <option value={'2021'}>2021</option>
                    <option value={'2020'}>2020</option>
                    <option value={'2019'}>2019</option>
                </select>
            </div>
        </div>
    );



};

export default ExpensesFilter;