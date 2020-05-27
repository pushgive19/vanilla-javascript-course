// function sayhello(name, age) {
//   return `Hello ${name} you are ${age} bye.`;
// }

// const greeting = sayhello("minjoon", 26);
const calculator = {
  plus: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
// console.log(greeting);
const x = 5;
const y = 10;

const plus = calculator.plus(x, y);
console.log(`${x} + ${y}  = ${plus}`);

const minus = calculator.minus(x, y);
console.log(`${x} - ${y}  = ${minus}`);

const multiply = calculator.multiply(x, y);
console.log(`${x} * ${y}  = ${multiply}`);

const divide = calculator.divide(x, y);
console.log(`${x} / ${y}  = ${divide}`);

const power = calculator.power(x, y);
console.log(`${x} ** ${y} = ${power}`);
