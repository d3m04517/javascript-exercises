const fibonacci = function(num) {
    let nums = [1,1];
    let newNum = 0;
    if (num < 0) {
        return "OOPS";
    } else if (typeof num == String) {
        newNum = parseInt(num);
    }
    for (i = 1; i < num - 1; i++) {
        nums.push(nums[i] + nums[i-1]);
    }
    return nums[nums.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
