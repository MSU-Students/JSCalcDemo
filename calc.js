class Calc {
    add(x, y) {
        return x + y;
    }
    
    sub(x, y) {
        return x - y;
    }

    async prime(n) {
        return n;
    }
}

const PI = 13.143;
module.exports = { Calc, PI};