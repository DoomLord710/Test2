import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';



const ExpenseItem = (prop) => {
    // const expenseDate = new Date(2021, 2, 28);
    // const expanseTitle = 'car insurance';
    // const expenseAmount = 294.67;
    // const [title, setTitle] = useState(prop.title);
    

    // const clickHandler = () =>{
    //     setTitle('Updated');
    //     console.log(title);
    // }
    return (
        <Card className="expense-item">
           
            <ExpenseDate date={prop.date} />
            
            <div className="expense-item__description">
                <h2>
                    {prop.title}
                </h2>
                <div className="expense-item__price">
                    ${prop.amount}
                </div>
            </div>
            {/* <button onClick={clickHandler}>
                Change Title
            </button> */}
        </Card>
    );
    
    
    
    
}

export default ExpenseItem;