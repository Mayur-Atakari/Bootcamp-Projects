// Question-6:    WAP to input n numbers and log the average of those number.

let n = [5, 8, 4, 5, 4];

let sum = 0;
for (let i = 0; i < n.length; i++) {
  sum = sum + n[i];
}

let Ave = sum / n.length;
console.log(Ave);
