// global namespace
// declare math if exists or empty object
var math = math || {};

(function () {
    // Its scope has an independent area from outside
    function sum(a, b) {
        return a + b;
    }

    // injection
    math.sum = sum;
})
