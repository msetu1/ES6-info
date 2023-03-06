// question :1

const multiply = (first, second, third) => first * second * third;
const result = multiply(4, 4, 4);
// console.log(result);

// question :2
// template String and three line

const explain = `I am a web developer. I love to code. I love to eat biryani.`
// console.log(explain);

// question: 3
const add1 = num => num * 2;
const oneParameter = add1(5);
// console.log(oneParameter);

const add2 = (num1, num2) => num1 + num2;
const twoParameter = add1(10, 30);
// console.log(twoParameter);

// question:4
const doMath = (a, b, c, d, e) => {
    const numSum = a + b + c + d + e;
    const numMulti = numSum * 5;
    const average = numMulti / 5;
    return average;
}
const total = doMath(41, 52, 63, 74, 85);
console.log(total);


