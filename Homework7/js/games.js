"use strict";
// ЗАДАНИЕ 11
/*Дан массив слов:['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин']
Необходимо перемешать элементы массива и вывести на экран пользователю с использованием 
alert();
Спросить у пользователя:
Чему равнялся первый элемент массива?
Чему равнялся последний элемент массива?
Поздравить пользователя, если он угадал оба элемента.
Если пользователь угадал только одно слово, сообщить: «Вы были близки к победе!»
Если не угадал ни одного элемента, сообщить, что пользователь ответил неверно.*/


function memoryGame() {
    const wordsArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    (function () {
        for (let i = wordsArray.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [wordsArray[i], wordsArray[j]] = [wordsArray[j], wordsArray[i]];
        }
    }());

    alert(wordsArray.join(', '));

    const userFirstAnswer = prompt('Чему равнялся первый элемент массива?', '');
    const userSecondAnswer = prompt('Чему равнялся последний элемент массива?', '');

    if ((userFirstAnswer.toLowerCase().trim() === wordsArray[0].toLowerCase()) &&
        userSecondAnswer.toLowerCase().trim() === wordsArray[wordsArray.length - 1].toLowerCase()) {
        alert('Всё верно! У Вас отличная память!');

    } else if (userFirstAnswer.toLowerCase().trim() === wordsArray[0].toLowerCase() ||
        userSecondAnswer.toLowerCase().trim() === wordsArray[wordsArray.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!');

    } else {
        alert('Возможно в следующий раз Вам повезёт больше!');
    }
}

// Первая игра

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