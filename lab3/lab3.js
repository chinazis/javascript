import { fib } from './lab2.js';

/**
 * Возвращает дробную часть числа, округленную до двух знаков после запятой.
 * Корректно обрабатывает отрицательные числа.
 * 
 * @param {number} num - Исходное число.
 * @returns {number} Дробная часть числа.
 */
export function getDecimal(num) {
    return +(num >= 0 ? num % 1 : 1 + (num % 1)).toFixed(2);
}

/**
 * Нормализует URL-адрес, добавляя или заменяя протокол на 'https://'.
 * 
 * @param {string} url - Исходный URL-адрес.
 * @returns {string} Нормализованный URL-адрес с протоколом https.
 */
export function normalizeUrl(url) {
   if (url.startsWith('http://')) {
    return 'https://' + url.slice(7);
   }
   if (url.startsWith('https://')) {
    return url;
   }
   return 'https://' + url;
}

/**
 * Проверяет строку на наличие спам-слов ('viagra' или 'xxx').
 * Регистр символов не учитывается.
 * 
 * @param {string} str - Проверяемая строка.
 * @returns {boolean} true, если строка содержит спам; иначе false.
 */
export function checkSpam(str) {
    const lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

/**
 * Усекает строку до заданной максимальной длины, добавляя троеточие в конец.
 * Длина итоговой строки вместе с троеточием не превышает maxlength.
 * 
 * @param {string} str - Исходная строка.
 * @param {number} maxlength - Максимально допустимая длина строки.
 * @returns {string} Усеченная или исходная строка.
 */
export function truncate(str, maxlength) {
    if (str.length > maxlength)
        return str.slice(0, maxlength - 1) + '…';
    return str;
}

/**
 * Преобразует строку из формата camel-case (через дефис) в формат camelCase.
 * Например: "my-long-word" преобразует в "myLongWord".
 * 
 * @param {string} str - Строка с дефисами.
 * @returns {string} Строка в формате camelCase.
 */
export function camelize(str) {
    return str.split('-').map((word, index) => {
        if (index === 0)
            return word;
        return word ? word[0].toUpperCase() + word.slice(1) : '';
    }).join('');
}

/**
 * Генерирует массив, содержащий первые n чисел Фибоначчи.
 * Использует внешнюю функцию fib() для расчета каждого числа.
 * 
 * @param {number} n - Количество чисел Фибоначчи для генерации.
 * @returns {number[]} Массив с числами Фибоначчи.
 */
export function fibs(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push(fib(i));
    }
    return result;
}

/**
 * Возвращает массив уникальных значений.
 * @template T
 * @param {Array<T>} arr - Входной массив.
 * @returns {Array<T>} Массив уникальных значений.
 */
export function arrReverseSorted(arr) {
    return arr.slice().sort((a, b) => b - a);
}

/**
 * Возвращает новый массив, содержащий только уникальные элементы исходного массива.
 * 
 * @param {Array} arr - Исходный массив с возможными дубликатами.
 * @returns {Array} Массив, состоящий из уникальных элементов.
 */
export function unique(arr) {
    return [...new Set(arr)];
}
