import { checkoutTextLength, isEscKeydown } from './utils.js';
import { showSuccessMessage, showErrorMessage } from './upload-system-messages.js';
import { resetPhotoSizeValue } from './photo-size-scale.js';
import { resetPhotoEffects } from './add-photo-effect.js';
import { sendPhotoData } from './api.js';

const PHOTO_DESCRIPTION_MIN_LENGTH = 20;
const PHOTO_DESCRIPTION_MAX_LENGTH = 140;

const uploadOverlay = document.querySelector('.img-upload__overlay');
const photoDescriptionField = document.querySelector('.text__description');
const uploadForm = document.querySelector('.img-upload__form');
const closeButton = document.querySelector('#upload-cancel');
const uploadFormFileInput = document.querySelector('#upload-file');
const uploadButton = document.querySelector('.img-upload__submit');

const blockUploadButton = () => {
  uploadButton.disabled = true;
  uploadButton.textContent = 'Публикуем...';
};

const unblockUploadButton = () => {
  uploadButton.disabled = false;
  uploadButton.textContent = 'Опубликовать';
};

const closeUploadForm = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onUploadFormEscKeydown);
  uploadForm.reset();
  resetPhotoSizeValue();
  resetPhotoEffects();
};

//Валидация
const validatePhotoDescriptionLength = (string) =>
  checkoutTextLength(
    string,
    PHOTO_DESCRIPTION_MIN_LENGTH,
    PHOTO_DESCRIPTION_MAX_LENGTH
  );

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div',
});

pristine.addValidator(
  photoDescriptionField,
  validatePhotoDescriptionLength,
  'Длина комментария от 20 до 140 символов'
);

const setUserFormSubmit = (onSuccess) => {
  resetPhotoEffects();
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockUploadButton();

      sendPhotoData(
        () => {
          onSuccess();
          showSuccessMessage();
          unblockUploadButton();
        },
        () => {
          showErrorMessage();
          unblockUploadButton();
        },
        new FormData(evt.target)
      );
    }
  });
};

uploadFormFileInput.addEventListener('change', () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
});

closeButton.addEventListener('click', closeUploadForm);

function onUploadFormEscKeydown (evt) {
  if(isEscKeydown(evt) && !uploadOverlay.classList.contains('hidden')) {
    closeUploadForm();
  }
}


export {
  setUserFormSubmit,
  closeUploadForm
};
