const fibonacci = function(count) {
    if(count < 0) return "OOPS";
    return count < 1 ? 0
    : count <= 2 ? 1
    :fibonacci(count - 1) + fibonacci(count- 2)
    
};

// Do not edit below this line
module.exports = fibonacci;
