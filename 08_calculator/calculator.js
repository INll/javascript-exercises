const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return Math.max(num1, num2) - Math.min(num1, num2);
};

const sum = function(arr) {
	let output = 0;
  for (let element of arr) {
    output += element;
  }
  return output;
};

const multiply = function(arr) {
  let output = 1;
  for (let element of arr) {
    output *= element;
  }
  return output;
};

const power = function(num, raiseTo) {
	let output = num;
  for (let i = 0; i < raiseTo - 1; i++) {
    output *= num;
  }
  return output;
};

const factorial = function(num) {
	let output = 1;
  for (let i = 1; i <= num; i++) {
    output *= i
  }
  return output;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
