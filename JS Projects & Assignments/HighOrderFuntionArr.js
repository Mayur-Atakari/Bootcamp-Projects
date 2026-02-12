let arr = [1, 5, 4, 6, 9, 8];

const filterArr = arr.filter((a) => a % 2 == 0); // filter on the basis of condition and send that element into new arr.  note - > size of new array can be equal or less.

const mapArr = arr.map((a) => a * 2); // map performs the operation on every element of array and send it to new array. note -> size of new array will always same.

const reduceArr = arr.reduce((acc, cumm) => acc + cumm, 0); // reduce perform opteration on all array items and make one array element for new array. note -> size of new array is only one element.

console.log(filterArr);
console.log(mapArr);
console.log(reduceArr);
