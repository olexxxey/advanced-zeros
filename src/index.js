module.exports = function getZerosCount(number, base) {
    let primes = [];
    let arr = [];
    let zeros = [];
    let sum = 0;

    for (let i = 2; i <= base; i++) {
        let meter = 0;
        if (base % i == 0) primes.push(i);
        while (base % i == 0) {
            base /= i;
            meter++;
        }
        if (meter > 0)  arr.push(meter);
    }

    primes.forEach((prime, index) => {
        let deg = 2;
        while (number / prime > 1) {
            sum += Math.floor(number / prime);
            prime = Math.pow(primes[index], deg);
            deg++;
        }
        zeros.push(sum);
        sum = 0;
    })

    return zeros.map((zero, index) => Math.floor(zero/arr[index])).sort((a, b) => a-b)[0];
}