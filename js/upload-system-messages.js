import { isEscKeydown } from './utils.js';

const body = document.body;
const uploadOverlay = document.querySelector('.img-upload__overlay');

//Сообщение об успешной загрузке
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successTemplateBlock = successTemplate.cloneNode(true);
const successButton = successTemplateBlock.querySelector('.success__button');

const onSuccessMesageClose = () => {
  successTemplateBlock.classList.add('hidden');
  document.removeEventListener('keydown', onSuccesMesageEscKeyDown);
};

const onOuterClickCloseSuccess = (evt) => {
  if(evt.target.classList.contains('success')) {
    onSuccessMesageClose();
  }
};

const showSuccessMessage = () => {
  body.appendChild(successTemplateBlock);
  successTemplateBlock.classList.remove('hidden');
  successButton.addEventListener('click', onSuccessMesageClose);
  document.addEventListener('keydown', onSuccesMesageEscKeyDown);
  successTemplateBlock.addEventListener('click', onOuterClickCloseSuccess);
};

function onSuccesMesageEscKeyDown (evt) {
  if (isEscKeydown(evt)) {
    onSuccessMesageClose();
  }
}

//Соббщение о неуспешной загрузке
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorTemplateBlock = errorTemplate.cloneNode(true);
const errorButton = errorTemplateBlock.querySelector('.error__button');

const closeErrorMesage = () => {
  errorTemplateBlock.classList.add('hidden');
  uploadOverlay.classList.remove('hidden');
  document.removeEventListener('keydown', onErrorMesageEscKeyDown);
};

const onOuterClickCloseError = (evt) => {
  if(evt.target.classList.contains('error')) {
    closeErrorMesage();
  }
};

const showErrorMessage = () => {
  body.appendChild(errorTemplateBlock);
  uploadOverlay.classList.add('hidden');
  errorTemplateBlock.classList.remove('hidden');
  errorButton.addEventListener('click', closeErrorMesage);
  document.addEventListener('keydown', onErrorMesageEscKeyDown);
  errorTemplateBlock.addEventListener('click', onOuterClickCloseError);
};

function onErrorMesageEscKeyDown(evt) {
  if (isEscKeydown(evt)) {
    closeErrorMesage();
  }
}

export {
  showSuccessMessage,
  showErrorMessage
};
