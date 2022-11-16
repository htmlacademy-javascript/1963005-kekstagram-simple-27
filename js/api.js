import { showGetDataErrorMessage } from './utils.js';

const GET_PHOTOS_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const UPLOAD_PHOTO_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

export const getDataPhotosList = (onSuccess) => {
  fetch(GET_PHOTOS_URL)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(() => {
      showGetDataErrorMessage('Ошибка загрузки данных');
    });
};

export const sendPhotoData = (onSuccess, onError, form) => {
  fetch(UPLOAD_PHOTO_URL, {
    method: 'POST',
    body: form
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError({
          status: response.status,
          statusText: response.statusText,
        });
      }
    })
    .catch(onError);
};


