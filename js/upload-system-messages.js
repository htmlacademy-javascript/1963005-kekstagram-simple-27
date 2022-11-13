import { isEscKeydown } from './utils.js';

const body = document.body;
const uploadForm = document.querySelector('.img-upload__form');

//Сообщение об успешной загрузке
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const successTemplateBlock = successTemplate.cloneNode(true);
const successButton = successTemplateBlock.querySelector('.success__button');

const closeSuccessMesage = () => {
  successTemplateBlock.classList.add('hidden');
  document.removeEventListener('keydown', onSuccesMesageEscKeyDown);
};

const onOuterClickCloseSuccess = (evt) => {
  if(evt.target.classList.contains('success')) {
    closeSuccessMesage();
  }
};

const showSuccessMessage = () => {
  body.appendChild(successTemplateBlock);
  uploadForm.classList.add('hidden');
  successTemplateBlock.classList.remove('hidden');
  successButton.addEventListener('click', closeSuccessMesage);
  document.addEventListener('keydown', onSuccesMesageEscKeyDown);
  successTemplateBlock.addEventListener('click', onOuterClickCloseSuccess);
};

function onSuccesMesageEscKeyDown (evt) {
  if (isEscKeydown(evt)) {
    closeSuccessMesage();
  }
}

//Соббщение о неуспешной загрузке
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const errorTemplateBlock = errorTemplate.cloneNode(true);
const errorButton = errorTemplateBlock.querySelector('.error__button');

const closeErrorMesage = () => {
  errorTemplateBlock.classList.add('hidden');
  uploadForm.classList.remove('hidden');
  document.removeEventListener('keydown', onErrorMesageEscKeyDown);
};

const onOuterClickCloseError = (evt) => {
  if(evt.target.classList.contains('error')) {
    closeErrorMesage();
  }
};

const showErrorMessage = () => {
  body.appendChild(errorTemplateBlock);
  uploadForm.classList.add('hidden');
  errorTemplateBlock.classList.remove('hidden');
  errorButton.addEventListener('click', closeErrorMesage);
  document.addEventListener('keydown', onErrorMesageEscKeyDown);
  errorTemplateBlock.addEventListener('click', onOuterClickCloseError);
};

function onErrorMesageEscKeyDown (evt) {
  if (isEscKeydown(evt)) {
    closeErrorMesage();
  }
}

export {
  showSuccessMessage,
  showErrorMessage
};
