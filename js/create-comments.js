import { getRandomNumber, getRandomArrayElement } from './utils.js';
import { COMMENTS, USERS_NAMES } from './data.js';

let commentId = 0;

const getUniqCommentId = () => {
  commentId++;
  return commentId;
};

const createComments = () => {
  getUniqCommentId();

  return {
    id: commentId,
    avatar: `img/avatar-${ getRandomNumber(1, 6) }.svg`,
    comment: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(USERS_NAMES)
  };
};

export {
  createComments
};
