
// object for a roman numeral 
function roman(roman, value) {
    this.roman = roman;
    this.value = value;
    return this;
}

// Set up roman numeral data 
var romans = [new roman('M', 1000),
    new roman('CM', 900),
    new roman('D', 500),
    new roman('CD', 400),
    new roman('C', 100),
    new roman('XC', 90),
    new roman('L', 50),
    new roman('XL', 40),
    new roman('X', 10),
    new roman('IX', 9),
    new roman('V', 5),
    new roman('IV', 4),
    new roman('I', 1),
]

// Roman numeral generator and parser module
module.exports = {

    // generate a roman numeral from an integer
    generate: function (integer) {
        // validate input
        if (isNaN(integer) || integer < 0
            || integer > 3999) return false;

        var result = '';

        for (i = 0; i < romans.length; i++) {
            while (integer >= romans[i].value) {
                result += romans[i].roman;
                integer -= romans[i].value;
            }
        }
        return result;
    },

    // parse a roman numeral string to an int
    parse: function (string) {

        // Validate correct roman numeral up to 3999
        var regx = new RegExp('^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$')
        if (!regx.test(string)) return false;

        string = string.toUpperCase();
        var result = 0;
        for (var i = 0; i < romans.length; i++) {
            // look at the search string and compare the length of the roman to the first characters in the string
            while (string.substr(0, romans[i].roman.length).indexOf(romans[i].roman) >= 0) {
                result += romans[i].value;
                // remove the found roman numeral and check for more
                string = string.substr(romans[i].roman.length, string.length);
            }
        }

        return result;
    }
};