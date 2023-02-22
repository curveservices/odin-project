const leapYears = function(year) {
//     return ((year % 4 == 0 ) && (year % 100 !=0)) || (year % 400 == 0)
// };
return (year & 3) == 0 && ((year % 25) != 0 || (year & 15) == 0);
};
// Do not edit below this line
module.exports = leapYears;
