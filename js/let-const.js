// let: let is to reassign
// const: do not allow it to reassign


// let 
let money = 40;
money = 50;
console.log(money);

// const 
const bird = 'jaan pakhi';
// bird = 'moyna pakhi';
const add = bird + ' moyna phakhi';
console.log(add);

const numbers = [11, 22, 33, 44, 55];
numbers.pop();
numbers[2] = 66;
console.log(numbers);

// default perameter
function fullName(first, last = 'akter') {
    const name = first + ' ' + last;
    return name;
}
const name = fullName('halima');
console.log(name);