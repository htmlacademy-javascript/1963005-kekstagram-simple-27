import { checkoutTextLength, isEscKeydown } from './utils.js';
import { resetPhotoSizeValue } from './upload-photo-size-scale.js';
import { resetPhotoEffects } from './add-photo-effect.js';

const PHOTO_DESCRIPTION_MIN_LENGTH = 20;
const PHOTO_DESCRIPTION_MAX_LENGTH = 140;

const uploadOverlay = document.querySelector('.img-upload__overlay');
const photoDescriptionField = document.querySelector('.text__description');
const uploadForm = document.querySelector('.img-upload__form');
const uploadFormCLoseButton = document.querySelector('#upload-cancel');
const uploadFormFileInput = document.querySelector('#upload-file');

const openUploadForm = () => {
  document.body.classList.add('modal-open');
  uploadOverlay.classList.remove('hidden');

  const onUploadFormEscKeydown = (evt) => {
    if (isEscKeydown(evt)) {
      evt.preventDefault();
      closeUploadForm();
    }
  };

  const onInputEscKeydown = (evt) => {
    if (isEscKeydown(evt)) {
      evt.preventDefault();
      evt.stopPropagation();
    }
  };

  photoDescriptionField.addEventListener('keydown', onInputEscKeydown);

  const onUploadFormCloseButtonClick = () => {
    closeUploadForm();
  };

  uploadFormCLoseButton.addEventListener('click', onUploadFormCloseButtonClick);
  document.addEventListener('keydown', onUploadFormEscKeydown);

  function closeUploadForm() {
    document.body.classList.remove('modal-open');
    uploadOverlay.classList.add('hidden');

    document.removeEventListener('keydown', onUploadFormEscKeydown);
    uploadFormCLoseButton.removeEventListener('click', onUploadFormCloseButtonClick);

    uploadForm.reset();
    resetPhotoSizeValue();
    resetPhotoEffects();
  }
};

const openPhotoUploadForm = () => {
  uploadFormFileInput.addEventListener('change', openUploadForm);
};

//Валидация
const validatePhotoDescriptionLength = (string) => checkoutTextLength(string, PHOTO_DESCRIPTION_MIN_LENGTH, PHOTO_DESCRIPTION_MAX_LENGTH);

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'div'
});

pristine.addValidator(
  photoDescriptionField,
  validatePhotoDescriptionLength,
  'Длина комментария от 20 до 140 символов'
);


uploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (pristine.validate()) {
    uploadForm.submit();
  }
});

export {
  openPhotoUploadForm
};
