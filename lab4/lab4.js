'use strict';

/**
 * Класс, представляющий книгу.
 * @class
 */
class book {
    /**
     * Создаёт экземпляр книги.
     * @param {string} title - Название книги.
     * @param {number} pubYear - Год издания.
     * @param {number} price - Цена книги.
     */
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.price = price;
    }

    /**
     * Выводит информацию о книге в консоль.
     * @returns {void}
     */
    show() {
        console.log(`Название: ${this.title}, Цена: ${this.price}`);
    }
}

const myBook = new book('Война и мир', 1869, 500);
myBook.show();

/**
 * Класс книги с геттерами/сеттерами и валидацией.
 * @class
 */
class bookWithGetters {
    /** @type {number} приватная цена */
    #price;

    /**
     * Создаёт экземпляр книги с валидацией.
     * @param {string} title - Название книги (не может быть пустым).
     * @param {number} pubYear - Год издания (положительное число).
     * @param {number} price - Цена книги (положительное число).
     */
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.#price = price;
    }

    /**
     * Геттер для названия.
     * @type {string}
     */
    get title() {
        return this._title;
    }

    /**
     * Сеттер для названия с проверкой.
     * @param {string} value - Новое название (не пустая строка).
     * @throws {Error} Если название пустое или не строка.
     */
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Название не может быть пустой строкой');
        }
        this._title = value;
    }

    /**
     * Геттер для года издания.
     * @type {number}
     */
    get pubYear() {
        return this._pubYear;
    }

    /**
     * Сеттер для года издания с проверкой.
     * @param {number} value - Новый год (положительное число).
     * @throws {Error} Если год не положительное число.
     */
    set pubYear(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Год издания должен быть положительным числом');
        }
        this._pubYear = value;
    }

    /**
     * Геттер для цены (приватное поле).
     * @type {number}
     */
    get price() {
        return this.#price;
    }

    /**
     * Сеттер для цены с проверкой.
     * @param {number} value - Новая цена (положительное число).
     * @throws {Error} Если цена не положительное число.
     */
    set price(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Цена должна быть положительным числом');
        }
        this.#price = value;
    }

    /**
     * Выводит информацию о книге в консоль.
     * @returns {void}
     */
    show() {
        console.log(`Название: ${this.title}, Цена: ${this.price}`);
    }
}

const myBook2 = new bookWithGetters('Преступление и наказание', 1866, 450);
myBook2.show();
myBook2.title = 'Идиот';
console.log(myBook2.title);

/**
 * Класс книги с возможностью сравнения по году издания.
 * @extends bookWithGetters
 */
class bookWithCompare extends bookWithGetters {
    /**
     * Статический метод сравнения двух книг по году издания.
     * @param {bookWithCompare} bookA - Первая книга.
     * @param {bookWithCompare} bookB - Вторая книга.
     * @returns {number} Отрицательное число, если bookA.pubYear < bookB.pubYear,
     *                   положительное, если больше, и 0, если равны.
     */
    static compare(bookA, bookB) {
        return bookA.pubYear - bookB.pubYear;
    }
}

const books = [
    new bookWithCompare('Евгений Онегин', 1833, 300),
    new bookWithCompare('Мёртвые души', 1842, 400),
    new bookWithCompare('Герой нашего времени', 1840, 350)
];
books.sort(bookWithCompare.compare);
console.log('Отсортированные книги по году издания:');
books.forEach(book => console.log(`${book.title} — ${book.pubYear} год`));

/**
 * Проверяет, является ли объект пустым (не содержит собственных свойств, включая неперечисляемые и символы).
 * @param {object} obj - Проверяемый объект.
 * @returns {boolean} `true`, если объект не имеет собственных свойств, иначе `false`.
 */
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    if (Object.getOwnPropertyNames(obj).length > 0) {
        return false;
    }
    const symbols = Object.getOwnPropertySymbols(obj);
    return symbols.length === 0;
}
console.log(isEmpty({}));
console.log(isEmpty({ [Symbol()]: 'test' }));
console.log(isEmpty(true));
const objWithProp = Object.defineProperty({}, 'name', { value: 'John' });
console.log(isEmpty(objWithProp));

let obj = { className: 'open menu' };

/**
 * Добавляет класс к свойству `className` объекта, если он ещё не присутствует.
 * @param {object} obj - Объект, у которого есть свойство `className` (строка).
 * @param {string} cls - Имя класса для добавления.
 * @returns {object} Тот же объект с обновлённым `className`.
 */
function addClass(obj, cls) {
    let classes = obj.className ? obj.className.split(' ') : [];
    if (!classes.includes(cls)) {
        classes.push(cls);
    }
    obj.className = classes.join(' ').trim();
    return obj;
}

/**
 * Удаляет класс из свойства `className` объекта, если он присутствует.
 * @param {object} obj - Объект, у которого есть свойство `className` (строка).
 * @param {string} cls - Имя класса для удаления.
 * @returns {object} Тот же объект с обновлённым `className`.
 */
function removeClass(obj, cls) {
    let classes = obj.className ? obj.className.split(' ') : [];
    classes = classes.filter(c => c !== cls);
    obj.className = classes.join(' ').trim();
    return obj;
}

obj = { className: 'open menu' };
addClass(obj, 'new');
console.log(obj.className);
addClass(obj, 'open');
console.log(obj.className);
removeClass(obj, 'menu');
console.log(obj.className);

/** @type {{ name: string, age: number, address: { city: string, zip: number } }} */
const testObj = {
    name: 'John',
    age: 30,
    address: {
        city: 'Moscow',
        zip: 101000
    }
};
const jsonString = JSON.stringify(testObj, null, 2);
console.log('JSON строкa:\n', jsonString);
const obj2 = JSON.parse(jsonString);
console.log('Декодированный объект:', obj2);
console.log(JSON.stringify(testObj) === JSON.stringify(obj2));

/**
 * Возвращает количество секунд, прошедших с начала текущего дня.
 * @returns {number} Количество секунд (целое число).
 */
function getSecondsToday() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - startOfDay) / 1000);
}
console.log(`Секунд с начала дня: ${getSecondsToday()}`);

/**
 * Форматирует дату в строку вида `ДД.ММ.ГГ`.
 * @param {Date} date - Объект даты.
 * @returns {string} Отформатированная дата.
 */
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
}
console.log(formatDate(new Date()));
