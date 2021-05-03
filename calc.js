class Calc {
    add(x, y) {
        return x + y;
    }
    
    sub(x, y) {
        return x - y;
    }

    async prime(n) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(n);
            }, 5 * 1000);
        });
    }
}

const PI = 13.143;
module.exports = { Calc, PI};