// Проверка на количество вводимых символов
const checkoutTextLength = (text, minLength, maxLength) => text.length >= minLength && text.length <= maxLength;

//Обработчик событий по нажатию на клавишу Esc
const isEscKeydown = (evt) => evt.key === 'Escape';

//Сообщение об ошибке загрузки данных
const showGetDataErrorMessage = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 5000);
};

export {
  checkoutTextLength,
  isEscKeydown,
  showGetDataErrorMessage
};


