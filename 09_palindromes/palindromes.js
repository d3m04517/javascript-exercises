const palindromes = function (str) {
    let punctionless = str.toLowerCase().replace(/[!.,\s]/g,"");
    for (let i = 0; i < punctionless.length; i++) {
        if (punctionless.charAt(i) != punctionless.charAt(punctionless.length - 1 - i)) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
