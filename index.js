let {Calc, PI} = require('./calc.js');

var myCalc = new Calc();
console.log(myCalc.add(1, 2));

var myPrime = myCalc.prime(500);

myPrime.then(function(value) {
    console.log(value);
});
console.log('end of program');