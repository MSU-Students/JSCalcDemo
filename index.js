let {Calc, PI} = require('./calc.js');

(async function main() {
    var myCalc = new Calc();
    console.log(myCalc.add(1, 2));

    var myPrime = await myCalc.prime(500);

    console.log(myPrime);

    console.log('end of program');
    
}());
