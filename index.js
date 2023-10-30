// Рекурсивне обчислення факторіалу
function calculateFactorial(a) {
    if (a <= 1) {
        return 1;
    }

    return a * calculateFactorial(a - 1);
}

const factorialResult = calculateFactorial(ваше число);
console.log(`Факторіал з 6 є ${factorialResult}`);
