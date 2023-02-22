
function sumAll(startNum, endNum) {

    if (startNum > 0 && endNum > 0 && typeof startNum === 'number' && typeof endNum === 'number') {
        
        let total = 0;
        if (startNum < endNum) {
            for (let i = startNum; i <= endNum; i++) {
                total += i;
            }
            return total;
        } else if (startNum > endNum) {
            for (let i = endNum; i <= startNum; i++) {
                total += i;
            }
            return total;
        }
    } else {
        return 'ERROR'
     }
    }
    // Do not edit below this line
    module.exports = sumAll;

