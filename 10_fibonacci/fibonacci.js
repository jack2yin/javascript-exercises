const fibonacci = function(series) {

    if (Math.floor(series) == 1) {
        return 1;
    } else if (Math.floor(series) == 0) {
        return 0;
    } else if (series < 0) {
        return 'OOPS';
    }

/*
Binet's formula
*/

    for (i = 1; i < series; i++) {
        return series = Math.floor( ( Math.pow( (1 + Math.sqrt(5)), series) - Math.pow( (1 - Math.sqrt(5)), series) ) / ( Math.pow(2, series) * Math.sqrt(5) ) )
        }
};


/*

0th fibonacci number is 0 (5 ms)
doesn't accept negatives (2 ms)
DOES accept strings (2 ms)
DOES accept strings (3 ms)


*/

// Do not edit below this line
module.exports = fibonacci;
