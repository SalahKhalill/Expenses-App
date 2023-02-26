import './ExpenseDate.css';
function ExpenseDate(props){
    const date = new Date(props.date)
    const month = date.toLocaleString('en-US',{month:'long'});
    const year = date.getFullYear();
    const day = date.toLocaleString('en-US',{day:'numeric'});
    return (
        <div className='expenseDate'>
            <div className='expenseMonth'>{month}</div>
            <div className='expenseYear'>{year}</div>
            <div className='expenseDay'>{day}</div>
        </div>
    )
}
export default ExpenseDate;