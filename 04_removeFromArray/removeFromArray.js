const removeFromArray = function(arr,...indexes) {
    let newArray = arr;

    for (const index of indexes) {
        newArray = newArray.filter(e => e !== index);
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
