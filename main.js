// Рекурсивне обчислення числа Фібоначчі
function calculateFibonacci(a) {
    if (a <= 1) {
        return a;
    }

    return calculateFibonacci(a - 1) + calculateFibonacci(a - 2);
}

const fibonacciResult = calculateFibonacci(ваше число);
console.log(`Фібоначчі 20 є ${fibonacciResult}`);