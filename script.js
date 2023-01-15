const incomeForm = document.getElementById("income-form");
const expenseForm = document.getElementById("expense-form");
const incomeList = document.getElementById("income-list");
const expenseList = document.getElementById("expense-list");
let totalIncome = 0;
let totalExpense = 0;

incomeForm.addEventListener("submit", function(event) {
event.preventDefault();
const description = document.getElementById("income-description").value;
const amount = parseFloat(document.getElementById("income-amount").value);

if (!description || isNaN(amount) || amount <= 0) {
alert("Please enter a valid income description and amount");
return;
}

const newIncome = document.createElement("li");
newIncome.innerHTML = description + " : $" + amount;
incomeList.appendChild(newIncome);

totalIncome += amount;
document.getElementById("income-total-amount").innerHTML = totalIncome;
});

expenseForm.addEventListener("submit", function(event) {
event.preventDefault();
const description = document.getElementById("expense-description").value;
const amount = parseFloat(document.getElementById("expense-amount").value);

if (!description || isNaN(amount) || amount <= 0) {
alert("Please enter a valid expense description and amount");
return;
}

const newExpense = document.createElement("li");
newExpense.innerHTML = description + " : $" + amount;
expenseList.appendChild(newExpense);

totalExpense += amount;
document.getElementById("expense-total-amount").innerHTML = totalExpense;
document.getElementById("budget-total-amount").innerHTML = totalIncome - totalExpense;
});