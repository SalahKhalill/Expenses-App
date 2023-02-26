import React, { useState } from 'react';


import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css'
import Card from '../UI/Card'
function ExpenseItem(props){

    //WITHOUT USING useState IT WILL NOT CHANGE ANYTHING LIKE JAVASCRIPT VANILLA DID SO IF WE WANT TO DO SUCH AS 
    //clickHandler we have to use usestate

    /*here we used array destructuring  we give the valye {title} and we give the function name that will excute
     the new title */

    return (
        <li>
    <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
        <div className='expense-item__price'>$ {props.amount}</div>
        <button onClick={() => {props.onDelete(props.id)}}>delete</button>
        </div>
    </Card>
        </li>
    );
}
export default ExpenseItem;