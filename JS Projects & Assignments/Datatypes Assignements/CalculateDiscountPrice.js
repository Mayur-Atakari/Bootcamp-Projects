// Question-9:    Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

let quantity = 5;

let rate = 200;

const amount = quantity * rate;

let discountAmount = amount / 10;

let final_Amount_After_Discount = amount - discountAmount;

console.log(`Original Amount is: ${amount}`);
console.log(`Total 10% Discount amount: ${discountAmount} `);
console.log(`Amount after Discount: ${final_Amount_After_Discount}`);
