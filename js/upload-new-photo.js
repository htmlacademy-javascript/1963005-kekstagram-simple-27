const FILE_TYPES = ['jpg', 'jpeg', 'png'];

const uploadFormFileInput = document.querySelector('#upload-file');
const uploadedPhoto = document.querySelector('.img-upload__preview img');
const uploadedPhotoEffectsPreview = document.querySelectorAll('.effects__preview');

uploadFormFileInput.addEventListener('change', () => {
  const photo = uploadFormFileInput.files[0];
  const photoName = photo.name.toLowerCase();

  const matches = FILE_TYPES.some((picture) => photoName.endsWith(picture));

  if (matches) {
    uploadedPhoto.src = URL.createObjectURL(photo);
    uploadedPhotoEffectsPreview.forEach((photoEffectPrewiew) => {
      photoEffectPrewiew.style.backgroundImage = `url(${URL.createObjectURL(photo)})`;
    });
  }
});

