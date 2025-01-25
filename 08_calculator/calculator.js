const add = function(...numbers) {
 return numbers.reduce((sum, current) => sum + current, 0)
};

const subtract = function(...numbers) {
	return numbers.reduce((sum, current) => (-sum) + (-current), 0)
};

const sum = function(numbers) {
	return numbers.reduce((sum, current) => sum + current, 0)
};

const multiply = function(numbers) {
	return numbers.reduce((sum, current) => sum * current)
};

const power = function(...numbers) {
	return numbers.reduce((num,pw) => Math.pow(num, pw))
};

const factorial = function(number) {
  if (number == 0 || number == 1) {
    return 1;
  }

  return number * factorial(number - 1)
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
