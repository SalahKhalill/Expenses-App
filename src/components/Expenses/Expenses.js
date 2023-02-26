import './Expenses.css'
import Card from  '../UI/Card'
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'

function Expenses(props) {
    const yearsArray = props.items.map(v => new Date(v.date).getFullYear())
    const[filteredYear,setFilterYear] = useState(yearsArray.length > 0 ? yearsArray.reduce((p,c) => p > c ? p : c).toString() : new Date().getFullYear().toString())
    const changeHandlerFilter = selectedYear =>{
        setFilterYear(selectedYear)
    }

    const filteredExpenses = props.items.filter (expense => {
        return new Date(expense.date).getFullYear().toString() === filteredYear
    });
    return(
        <div>
        <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={changeHandlerFilter}/>
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items = {filteredExpenses} onDelete={props.onDelete}></ExpensesList>
        </Card>    
        </div>

)
}
export default Expenses;