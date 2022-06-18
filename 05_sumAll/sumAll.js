const sumAll = function(num1, num2) {
    let n = 0;

    if (typeof num1 != "number" || typeof num2 != "number" || num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (num1 <= num2) {
        n = num2 - num1 + 1; //length of the series
        return n * (num1 + num2) / 2; //formula

    } else {
        n = num1 - num2 + 1; //length of the series
        return n * (num1 + num2) / 2; //formula
    }

    /* Least Efficient Algorithm
    if (num1 <= num2) {
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
    } else {
        for (let i = num2; i <= num1; i++) {
            sum += i;
        }
    }
    

   
    return sum;
    */

};

// Do not edit below this line
module.exports = sumAll;
