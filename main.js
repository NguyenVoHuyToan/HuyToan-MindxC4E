import { isPositiveInteger, add, subtract, multiply, divide, countDigits } from "./lib.js";

const a = Math.floor(Math.random() * 2000) + 1;
const b = Math.floor(Math.random() * 201) - 100;

console.log(`a = ${a}`);
console.log(`b = ${b}`);

console.log(`isPositiveInteger(a): ${isPositiveInteger(a)}`);
console.log(`isPositiveInteger(b): ${isPositiveInteger(b)}`);

console.log(`add(a, b): ${add(a, b)}`);
console.log(`subtract(a, b): ${subtract(a, b)}`);
console.log(`multiply(a, b): ${multiply(a, b)}`);
console.log(`divide(a, b): ${divide(a, b)}`);
console.log(`countDigits(a): ${countDigits(a)}`);
console.log(`countDigits(b): ${countDigits(b)}`);