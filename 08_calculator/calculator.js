const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(nums) {
  let sum = 0;
	for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

const multiply = function(nums) {
  let sum = 1;
	for (let i = 0; i < nums.length; i++) {
    sum *= nums[i];
  }
  return sum;
};

const power = function(num, power) {
	let total = 1;
  for (let i = 1; i <= power; i++) {
    total *= num;
  }
  return total;
};

const factorial = function(num) {
  let total = 1;
	for (let i = 2; i <= num; i++) {
    total *= i;
  }
  return total;
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
