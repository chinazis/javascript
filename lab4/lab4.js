'use strict';
/**
 *Класс Book, простой класс книги с конструктором и методом show для вывода информации о книге в консоле.
 */
class book {
    constructor(title, pubYear, price) {
        this.title = title; /*Название книги*/
        this.pubYear = pubYear; /*Год издания*/
        this.price = price; /*Цена*/
    } 
    /**
     * Метод show выводит строку с названием и ценой.
     */
    show() {
        console.log(`Название: ${this.title}, Цена: ${this.price}`);
    }
}
/**
 *Создаём экземпляр и вызываем метод show
 */
const myBook = new book('Война и мир', 1869, 500);
myBook.show();
/**
 *Класс bookwithgetters расщиренная версия с приватным полем #price и валидацией свойств
 */
class bookWithGetters {
    #price; /* Приватное поле для цены */
    constructor(title, pubYear, price) {
        this.title = title;
        this.pubYear = pubYear;
        this.#price = price; /* Сразу присваеваем приватному полю */
    }
    /**
     *Геттеры и сеттеры для title.
     */
    get title() {
        return this._title;
    }
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Название не может быть пустой строкой');
        }
        this._title = value;
    }
    /**
     * Геттеры и сеттеры для pubyear.
     */
    get pubYear() {
        return this._pubYear;
    }
    set pubYear(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Год издания должен быть положительным числом');
        }
        this._pubYear = value;
    }
    /**
     *Геттеры и сеттеры для price.
     */
    get price() {
        return this.#price;
    }
    set price(value) {
        if (typeof value !== 'number' || value <= 0) {
            throw new Error('Цена должна быть положительным числом');
        }
        this.#price = value;
    }
    /**
     *Метод show использует геттеры для получения значений.
     */
    show() {
        console.log(`Название: ${this.title}, Цена: ${this.price}`);
    }
}
/**
 *Создаём книгу с валидацией
 */
const myBook2 = new bookWithGetters('Преступление и наказание', 1866, 450);
myBook2.show();
myBook2.title = 'Идиот'; /* Меняем название через сеттер */
console.log(myBook2.title);
/**
 *Класс bookWithCompare расширяет bookWithCetters и добавляет статистический метод compare для сортировки по году
*/
class bookWithCompare extends bookWithGetters { 
    /*
     *Статистический метод сравнения двух книг по году издания.
     *Возвращает разницу городов.
     */
    static compare(bookA, bookB) {
        return bookA.pubYear - bookB.pubYear;
    }
}
/**
 *Массив книг для сортировки.
 */
const books = [
    new bookWithCompare('Евгений Онегин', 1833, 300),
    new bookWithCompare('Мёртвые души', 1842, 400),
    new bookWithCompare('Герой нашего времени', 1840, 350)
];
/**
 *Сотритуем массив с помощью статистического мтода compare.
 */
books.sort(bookWithCompare.compare);
console.log('Отсортированные книги по году издания:');
books.forEach(book => console.log(`${book.title} — ${book.pubYear} год`));
/**
 *Фуyкция isempty-проверка пустоты объекта.
 */
function isEmpty(obj) {
    /**
    * Перечисляемые свойства.
    */
    for (let key in obj) {
        return false;
    }
    /**
     * Неперечисляемые строковые свойства.
     */
    if (Object.getOwnPropertyNames(obj).length > 0) {
        return false;
    }
    /**
     * Свойства-символы
     */
    const symbols = Object.getOwnPropertySymbols(obj);
    return symbols.length === 0;
}
/* Тесты функции isempty */
console.log(isEmpty({}));
console.log(isEmpty({ [Symbol()]: 'test' }));
console.log(isEmpty(true));
const objWithProp = Object.defineProperty({}, 'name', { value: 'John' });
console.log(isEmpty(objWithProp));

let obj = { className: 'open menu' };
function addClass(obj, cls) {
    let classes = obj.className ? obj.className.split(' ') : [];
    if (!classes.includes(cls)) {
        classes.push(cls);
    }
    obj.className = classes.join(' ').trim();
    return obj;
}
function removeClass(obj, cls) {
    let classes = obj.className ? obj.className.split(' ') : [];
    classes = classes.filter(c => c !== cls);
    obj.className = classes.join(' ').trim();
    return obj;
}
/* Демонстрация */
obj = { className: 'open menu' };
addClass(obj, 'new');
console.log(obj.className);
addClass(obj, 'open');
console.log(obj.className);
removeClass(obj, 'menu');
console.log(obj.className);

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

function getSecondsToday() {
    const now = new Date();
    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.floor((now - startOfDay) / 1000);
}
console.log(`Секунд с начала дня: ${getSecondsToday()}`);

function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${day}.${month}.${year}`;
}
console.log(formatDate(new Date()))
