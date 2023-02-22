const add = function(a,b) {
	return a + b;

};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, current) => total + current, 0);
};

const multiply = function(array) {
  return array.length 
  ? array.reduce((times, nextItem) => times * nextItem)
  :0;
};

const power = function(a,b){
  return Math.pow(a,b);
}

function factorial(x) {
  let number = 1;
  for (let i =2; i <= x; i++)
    number = number * i;
    return number;
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
