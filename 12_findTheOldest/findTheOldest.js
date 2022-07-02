const findTheOldest = function(arr) {
    const oldestPerson = arr.reduce((prev, curr) => {

        if (curr.yearOfDeath && !prev.yearOfDeath) {
            return prev;
        } else if (!curr.yearOfDeath && prev.yearOfDeath) {
            return curr;
        } else if (!curr.yearOfDeath && !prev.yearOfDeath) {
            return curr.yearOfBirth < prev.yearOfBirth ? curr : prev;
        } else {
        return (curr.yearOfDeath - curr.yearOfBirth) > (prev.yearOfDeath - prev.yearOfBirth) ? curr : prev;
        }
    
    });
       
       return oldestPerson;
       
};

// Do not edit below this line
module.exports = findTheOldest;
