const caesar = function (word, shift) {
    let coded = "";
    for (let i = 0; i < word.length; i++) {

        if (((word.charCodeAt(i)) >= 65) && (word.charCodeAt(i)) <= 90) {

            if ((word.charCodeAt(i) + parseInt(shift)) > 90) {
                coded += String.fromCharCode((word.charCodeAt(i) + parseInt(shift) - 91) + 65);
            } else if ((word.charCodeAt(i) + parseInt(shift)) < 65) {
                coded += String.fromCharCode((word.charCodeAt(i) + parseInt(shift) - 64) + 90);
            }
             else {
                coded += String.fromCharCode(word.charCodeAt(i) + parseInt(shift));
            }
        }
        else if (((word.charCodeAt(i)) >= 97) && ((word.charCodeAt(i)) <= 122)) {

            if ((word.charCodeAt(i) + parseInt(shift)) > 122) {
                coded += String.fromCharCode(( word.charCodeAt(i) + parseInt(shift) - 123) - 97);
            } 
            else if ((word.charCodeAt(i) + parseInt(shift)) < 97) {
                coded += String.fromCharCode((word.charCodeAt(i) + parseInt(shift) - 96) + 122);
            }
            else {
                coded += String.fromCharCode(word.charCodeAt(i) + parseInt(shift));
            }
        }
        else {
            
            coded += String.fromCharCode(word.charCodeAt(i));
        }

    }
return coded;
};

// Do not edit below this line
module.exports = caesar;
