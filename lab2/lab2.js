/**
 * Возводит число x в степень n.
 *
 * @param {number} x - Основание степени.
 * @param {number} n - Показатель степени (целое число).
 * @returns {number} Результат возведения x в степень n.
 */
function pow(x, n) {
    if (n === 0) return 1;
    if (n < 0) return 1 / pow(x, -n);
    
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
}

/**
 * Вычисляет сумму чисел от 1 до n включительно для натурального n.
 * Исползует формулу арифметической прогрессии.
 *
 * @param {number} n - Натуральное число.
 * @returns {number} Сумма чисел от 1 до n.
 */
function sumTo(n) {
    return n * (n + 1) / 2;
}

/**
 * Проверяет, является ли год високосным.
 *
 * @param {number} year - Год для проверки.
 * @returns {boolean} Возвращает true, если год високосный, иначе false.
 */
function isLeapYear(year) {
    return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
}

/**
 * Вычисляет факториал числа n.
 * Использует рекурсивный вызов: n! = n * (n - 1)!.
 *
 * @param {number} n - Целое неотрицательное число.
 * @returns {bigint} Факториал числа n в виде BigInt.
 */
function factorial(n) {
    if (n === 0) return 1n;
    return BigInt(n) * factorial(n - 1);
}

/**
 * Возвращает n-е число Фибоначчи.
 *
 * @param {number} n - Порядковый номер числа Фибоначчи (целое неотрицательное число).
 * @returns {bigint} n-е число Фибоначчи в виде BigInt.
 */
function fib(n) {
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

/**
 * Функция сравнения. Принимает базовое значение x и возвращает функцию для сравнения с ним.
 *
 * @param {number} x - Базовое целочисленное значение для сравнения.
 * @returns {function(number): (boolean|null)} Анонимная функция, которая принимает число y и возвращает:
 * - true, если y > x
 * - false, если y < x
 * - null, если y === x
 */
function compare(x) {
    return function(y) {
        if (y > x) return true;
        if (y < x) return false;
        return null;
    };
}

/**
 * Вычисляет сумму всех переданных аргументов.
 *
 * @param {...number} args - Список чисел для суммирования.
 * @returns {number} Сумма всех аргументов.
 */
function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
}

/**
 * Добавляет в объект символьное свойство "blackSpot" со значением true из глобального реестра.
 * Модифицирует исходный объект.
 *
 * @param {Object} obj - Исходный объект.
 * @returns {Object} Тот же объект с добавленным символьным свойством.
 */
function addBlackSpot(obj) {
    obj[Symbol.for("blackSpot")] = true;
    return obj;
}
