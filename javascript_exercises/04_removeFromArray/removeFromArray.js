const removeFromArray = function(...args) {
    let array = args[0]
    return array.filter(val => !args.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
