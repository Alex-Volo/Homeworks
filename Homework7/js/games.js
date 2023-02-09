"use strict";

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