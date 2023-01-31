"use strict";

// Чтобы добиться чего-то в жизни, нужны хорошие связи. Хорошие нейронные связи.


// ЗАДАНИЕ 1

//Math.min() 

const returnMin = (a, b) => a < b ? a : b;


// ЗАДАНИЕ 2

const isEven = (number) => {
    if (isNaN(number)) {
        return ('Вы ввели не число');
    }
    if (number % 2) {
        return ('Нечетное');
    }
    return ('Четное');
}
//  Проверка
// console.log(isEven(2));
// console.log(isEven(7));
// console.log(isEven(-9));
// console.log(isEven('dsfg'));


// ЗАДАНИЕ 3.1
const square = (num) => console.log(num ** 2);

// Проверка
// let a = 9;
// square(a);


// ЗАДАНИЕ 3.2
const returnSquare = (num) => num ** 2;


// ЗАДАНИЕ 4

const sayHello = () => {
    let userAge = prompt('Сколько Вам лет?  ', 18);
    if (isNaN(userAge) || userAge < 0 || userAge === null) {
        console.log('Вы ввели неправильное значение или нажали "Отменить"');
    }
    else if (+userAge <= 12) {
        console.log('Привет, друг!');
    }
    else {
        console.log('Добрбо пожаловать!')
    }
}
// Проверка
// sayHello();


// ЗАДАНИЕ 5

const multiply = (a, b) => {
    if (isNaN(+a) || isNaN(+b)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return +a * +b;
    }
}
// Проверка
//   console.log(multiply(3, 6));
//   console.log(multiply('3', 6));
//   console.log(multiply('3', '12'));
//   console.log(multiply('sdfg', 6));
//   console.log(multiply('sdfg', 'asdgfag'));


// ЗАДАНИЕ 6 

const toCube = () => {
    let a = prompt('Введите число', 0);

    if (isNaN(a) || a === null) return 'Переданный параметр не является числом или вы нажали "Отмена"';

    return `${a} в кубе равняется ${a ** 3}`;
}

// console.log(toCube());  // Закоменчено, чтобы не всплывали модальные окна

// Проверка
// const toCubeDebug = (a) => {
//     if (isNaN(a) || a === null) return 'Переданный параметр не является числом или вы нажали "Отмена"';
//     return `${a} в кубе равняется ${a ** 3}`;
// }
// for (let i = 0; i <= 10; i++) {
//     console.log(toCubeDebug(i));
// }


// ЗАДАНИЕ 7

function getSeason(monthNumber) {
    if (isNaN(monthNumber)
        || monthNumber < 1
        || monthNumber > 12) {
        return ('Неправильно введен номер месяца. ' +
            'Поддерживаются только числа от 1-го до 12-ти, ' +
            'введенные арабскими цифрами.');
    } else if (monthNumber === 12 || monthNumber < 3) {
        return ('Сезон - зима');

    } else if (monthNumber < 6) {
        return ('Сезон - весна');

    } else if (monthNumber < 9) {
        return ('Сезон - лето');
    }

    return ('Сезон - осень');
}

// Проверка
// for (let i = -1; i <= 13; i++) {
//     console.log(getSeason(i));
// }




function gameSeason() {
    let monthValue = +prompt('Введите значение месяца (от 1-го до 12-ти');
    alert(getSeason(monthValue));
}