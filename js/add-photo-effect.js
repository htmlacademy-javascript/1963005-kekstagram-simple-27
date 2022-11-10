
const uploadedPhoto = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

const resetPhotoEffects = () => {
  uploadedPhoto.className = 'img-upload__preview';
  uploadedPhoto.style.filter = '';
};

const photoEffectHandler = (evt) => {
  const selectedEffect = evt.target.value;

  if (selectedEffect === 'none') {
    resetPhotoEffects();
  } else {
    uploadedPhoto.className = 'img-upload__preview';

    uploadedPhoto.classList.add(`effects__preview--${selectedEffect}`);
  }
};

effectsList.addEventListener('change', photoEffectHandler);

export {
  resetPhotoEffects
};
