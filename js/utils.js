// Генерация рандомного числа из заданного диапозона
function getRandomNumber (min, max) {
  if(min < 0 || max < 0) {
    throw new Error('Некорректный диапазон чисел. Введите диапазон положительных целых чисел(в т.ч. 0)');
  }

  const lowerCount = Math.ceil(Math.min(min, max));
  const upperCount = Math.floor(Math.max(min, max));

  const result = Math.random() * (upperCount - lowerCount + 1) + lowerCount;

  return Math.floor(result);
}

// Проверка на максимальное количество вводимых символов
function checkoutTextLength (text, minLength, maxLength) {
  return text.length >= minLength && text.length <= maxLength ;
}

// Рандомный выбор элемента массива
const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

//Обработчик событий по нажатию на клавишу Esc
const isEscKeydown = (evt) => evt.key === 'Escape';

export {
  getRandomNumber,
  checkoutTextLength,
  getRandomArrayElement,
  isEscKeydown
};


