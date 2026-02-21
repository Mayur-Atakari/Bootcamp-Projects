/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const grouped = transactions.reduce((acc, { category, price }) => {
    acc[category] = (acc[category] || 0) + price;
    return acc;
  }, {});

  return Object.entries(grouped).map(([category, total]) => ({
    [category]: total,
  }));
}

let transactions = [
  {
    itemName: "Fuel",
    category: "Travel",
    price: 500,
    timeStamp: 10,
  },
  {
    itemName: "Burger",
    category: "Food",
    price: 2000,
    timeStamp: 12,
  },
  {
    itemName: "Pizza",
    category: "Food",
    price: 2000,
    timeStamp: 12,
  },
];

console.log(calculateTotalSpentByCategory(transactions));

module.exports = calculateTotalSpentByCategory;
