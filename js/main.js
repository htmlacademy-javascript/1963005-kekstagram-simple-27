// Пример кода взят с https://learn.javascript.ru/task/random-int-min-max
function getRandomNumber (min, max) {
  if (min >= 0 && max > min) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  } else if(min > max) {
    throw new Error('Некорректный диапазон чисел. Введите первым числом-минимальное число из диапазона.');
  } else if(min === max) {
    throw new Error('Некорректный диапазон чисел. Введите целые числа должны быть разными.');
  } else if(min < 0 || max < 0) {
    throw new Error('Некорректный диапазон чисел. Введите диапазон положительных целых чисел(в т.ч. 0)');
  }
}

getRandomNumber(2, 1);

// Проверка на максимальное количество вводимых символов
function checkoutTextLength (text, maxLength) {
  return text.length <= maxLength;
}

checkoutTextLength();
