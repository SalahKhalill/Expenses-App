import React, { useState } from 'react';

import './ExpenseForm.css';
function ExpenseForm(props){
    const [enteredTitle,setEnteredTitle]= useState('');
    const [enteredAmount,setEnteredamount] = useState('');
    const [enteredDate,setEnteredDate] = useState('');
    // const [userInput,setUserInput]= useState({
    //     enteredTitle :'',
    //     enteredAmount:'',
    //     enteredDate:''
    // });

    function titleChangeHandler(event){
        setEnteredTitle(event.target.value)
        // // setUserInput({
        // //     ...userInput,
        // //     enteredTitle:event.target.value,
        // // })

        
        // setUserInput((prevState)=>{
        //     return{
        //         ...prevState,enteredTitle: event.target.value
        //     }
        // })
    }   
    function amountChangeHandler(event){
        setEnteredamount(event.target.value)
    }

    function dateChangeHandler(event){
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredamount('');
        setEnteredDate('');


    };
    const[isClicked,setIsClicked] = useState(false);
    let element;
    if(isClicked){
        element=
        <form onSubmit={submitHandler} >
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>title</label>
                    <input type='text' value = {enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type='number' min="0.1" step="0.1" value = {enteredAmount} onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type='date' min="2019-1-1" max="20-10-10" value = {enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button  type='button' onClick={()=> setIsClicked(false)}>Cancel</button>
                <button type='submit' >Add Expense</button>

            </div>
        </form>
    }else{
        element=<button onClick={()=>setIsClicked(true)}>Add New Expense</button>
    }
    
    return(
        <div>
            {element}
        </div>
    )
}
export default ExpenseForm;