const max = Math.max(11, 22, 55, 23);
// console.log(max);

const numbers = [11, 22, 55, 23];
const biggest = Math.max(...numbers);
// console.log(...numbers);

const numbers2 = [...numbers]
numbers.push(60);
numbers2.push(70);
console.log(numbers);
console.log(numbers2);

const numbers3 = [123, 456, 789, ...numbers, 163, 987];
console.log(numbers3);