import React,{ useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";



const DUMMY_EXPENSES = [

  // {
  //   id: 'e1',title: 'Toilet Paper', amount: 55.12, date: new Date("2020, 7, 14"),
  // },
  // { 
  //   id: 'e2', title: 'Phone bell', amount: 199.9, date: new Date("2021, 2, 12") 
  // },
  // {
  //   id: 'e3', title: 'Health Insurance', amount: 794.62, date: new Date("2021, 2, 28"),
  // },
  // {
  //   id: 'e4', title: 'Laptop', amount: 310, date: new Date("2021, 5, 12" ),
  // },

];
function App() {
  const [expenses,setExpense]= useState(JSON.parse(localStorage.getItem('expenses')) || DUMMY_EXPENSES);

  // Called everytime expenses changed / setExpense method is called
  useEffect(() => {
    console.log('set expenses')
    expenses  && localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

  const deleteExpense = (id) => {
    console.log('on Delete ', id);
    const newExpenses = expenses.filter(item => item.id !== id);
    setExpense(newExpenses);
  }

  const addExpenseHandler = expense => {
    setExpense((prevExpenses)=>{
      return [expense,...prevExpenses];
    })
  };

  return (
    <div >
      <NewExpense onAddExpense={addExpenseHandler}/>

      <Expenses items={expenses} onDelete={deleteExpense} />
      {/* <ExpenseItem title = {expenses[0].title} amount = {expenses[0].amount} date = {expenses[0].date}></ExpenseItem>
      <ExpenseItem title = {expenses[1].title} amount = {expenses[1].amount} date = {expenses[1].date}></ExpenseItem>
      <ExpenseItem title = {expenses[2].title} amount = {expenses[2].amount} date = {expenses[2].date}></ExpenseItem>
      <ExpenseItem title = {expenses[3].title} amount = {expenses[3].amount} date = {expenses[3].date}></ExpenseItem> */}

    </div>
  );
}

export default App;
