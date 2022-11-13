import { SIZE_SCALE_SETTINGS } from './data.js';

const uploadedPhoto = document.querySelector('.img-upload__preview img');
const photoSizeSmallerButton = document.querySelector('.scale__control--smaller');
const photoSizeBiggerButton = document.querySelector('.scale__control--bigger');
const photoSizeScaleField = document.querySelector('.scale__control--value');

const resetPhotoSizeValue = () => {
  photoSizeScaleField.value = `${SIZE_SCALE_SETTINGS.max}`;
  uploadedPhoto.style.transform = `scale(${SIZE_SCALE_SETTINGS.max / 100})`;
};

const changeSizeScaleValue = (increase) => {
  let photoSizeScaleValue = parseInt(photoSizeScaleField.value, 10);

  if (increase) {
    if (photoSizeScaleValue < SIZE_SCALE_SETTINGS.max) {
      photoSizeScaleValue += SIZE_SCALE_SETTINGS.step;
    }
  } else if (photoSizeScaleValue > SIZE_SCALE_SETTINGS.min) {
    photoSizeScaleValue -= SIZE_SCALE_SETTINGS.step;
  }

  photoSizeScaleField.value = `${photoSizeScaleValue}%`;
  uploadedPhoto.style.transform = `scale(${photoSizeScaleValue / 100})`;
};

const onIncreaseScaleButtonClick = () => changeSizeScaleValue(true);
const onDecreaseScaleButtonClick = () => changeSizeScaleValue(false);

photoSizeBiggerButton.addEventListener('click', onIncreaseScaleButtonClick);
photoSizeSmallerButton.addEventListener('click', onDecreaseScaleButtonClick);

export {
  resetPhotoSizeValue
};
