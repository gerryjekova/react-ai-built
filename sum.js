const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, num) => {
   return acc + num;
}, 0);

console.log(sum); // Output: 15
