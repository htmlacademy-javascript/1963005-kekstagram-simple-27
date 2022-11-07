import { getRandomArrayElement, getRandomNumber } from './utils.js';
import { createComments } from './create-comments.js';
import { PHOTOS_DESCRIPTIONS, USERS_PUBLISHED_PHOTO } from './data.js';

let photoId = 0;

const getUniqPhotoId = () => {
  photoId++;
  return photoId;
};

const createPhotos = () => {
  getUniqPhotoId();

  return {
    id: photoId,
    url: `photos/${ photoId }.jpg`,
    description: getRandomArrayElement(PHOTOS_DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: 1}, createComments)
  };
};

const publishedPhotos = Array.from({length: USERS_PUBLISHED_PHOTO}, createPhotos);

export {
  publishedPhotos
};
