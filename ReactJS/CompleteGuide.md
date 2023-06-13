# React - The Complete Guide (incl Hooks, React Router, Redux)

## React Basics & Working with Components
ExpenseItem.js 
```js 
function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  return (
    <>
      <div>{expenseDate.toISOString()}</div>
      <h2>{expenseTitle}/h2>
      <div>${expenseAmount}</div>
    </>
    )
}

export default ExpenseItem;

date.toLocaleString('en-US', { month: 'long'})
date.toLocaleString('en-US', { day: '2-digit'})
date.getFullYear()

const classes = 'card ' + props.className;
```
ExpenseItem.css
