let money = +prompt('Ваш бюджет на місяць?', '');
let time = prompt('Введіть дату у форматі YYYY-MM-DD', '');

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};

let requiredCostItem = prompt('Введіть обов\'язкову статтю витрат в цьому місяці', '');
let cost = +prompt('У скільки обійдеться?', '');

appData.expenses[requiredCostItem] = cost;

alert(`Бюджет на 1 день складає: ${appData.budget/30}`);