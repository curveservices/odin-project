const convertToCelsius = (fahrenheit) => {
  return Math.round((fahrenheit - 32) * (5/9) * 10) / 10;

};

const convertToFahrenheit = (Celsius) => {
  return Math.round(((Celsius * 9/5) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
