// Функция pow(x,n), которая возвращает x в степени n (n - целое число).
export function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / pow(x, -n);
    
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

// Функция sumTo(n), которая для данного натурального n вычисляет сумму чисел от 1 до n включительно.
export function sumTo(n) {
    return n * (n + 1) / 2;
}

// Функция-предикат isLeapYear(year), которая проверят год year на високосность.
export function isLeapYear(year) {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}

// Функция factorial(n), которая возвращает факториал числа n!, используя рекурсивный вызов n!= n*(n-1)!.
export function factorial(n) {
    if (n === 0) return 1n;
    return BigInt(n) * factorial(n - 1);
}

// Функция fib(n), которая возвращает n-е число Фибоначчи.
export function fib(n) {
    let a = 0n;
    let b = 1n;
    if (n === 0) return a;
    
    for (let i = 2; i <= n; i++) {
        const c = a + b;
        a = b;
        b = c;
    }
    return b;
}

// Функция compare(), которая принимает целочисленное значение x и возвращает анонимную функцию.
export function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

//Функция sum(...), которая возвращает сумму всех своих аргументов.
export function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
}

// Функция addBlackSpot(), которая принимает на вход объект и возвращает этот объект с добавленным к нему символьным свойством blackSpot=true, которое бёрется из глобального реестра символов.
export function addBlackSpot(obj) {
    obj[Symbol.for("blackSpot")] = true;
    return obj;
}