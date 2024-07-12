import {getRandomInteger, getUniqueRandomInteger, getRandomArrayElement} from './utils';
import {
  MIN_POSTS_QUANTITY,
  MAX_POSTS_QUANTITY,
  MIN_COMMENTATORS_QUANTITY,
  MAX_COMMENTATORS_QUANTITY,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENT_QUANTITY,
  MAX_COMMENT_QUANTITY,
  MIN_COMMENT_ID_QUANTITY,
  MAX_COMMENT_ID_QUANTITY,
  PHOTOS_DESCRIPTIONS,
  COMMENT_MESSAGES,
  NAMES
} from './constants';

const uniquePhotoId = getUniqueRandomInteger(MIN_POSTS_QUANTITY, MAX_POSTS_QUANTITY);
const uniquePhotoUrl = getUniqueRandomInteger(MIN_POSTS_QUANTITY, MAX_POSTS_QUANTITY);
const uniqueCommentId = getUniqueRandomInteger(MIN_COMMENT_ID_QUANTITY, MAX_COMMENT_ID_QUANTITY);

const createPhotoPost = () => {
  const randomId = uniquePhotoId();
  const randomUrl = uniquePhotoUrl();
  const randomDescription = getRandomArrayElement(PHOTOS_DESCRIPTIONS);
  const randomLikes = getRandomInteger(MIN_LIKES, MAX_LIKES);
  const commentQuantity = getRandomInteger(MIN_COMMENT_QUANTITY, MAX_COMMENT_QUANTITY);

  const createComments = () => {
    const randomCommentId = uniqueCommentId();
    const commentAvatarUrl = `img/avatar-${getRandomInteger(MIN_COMMENTATORS_QUANTITY, MAX_COMMENTATORS_QUANTITY)}.svg`;
    const commentMessage = `${getRandomArrayElement(COMMENT_MESSAGES)} ${getRandomArrayElement(COMMENT_MESSAGES)}`;
    const commentName = getRandomArrayElement(NAMES);

    return {
      id: randomCommentId,
      avatar: commentAvatarUrl,
      message: commentMessage,
      name: commentName,
    };
  };

  return {
    id: randomId,
    url: randomUrl,
    description: randomDescription,
    likes: randomLikes,
    comments: Array.from({ length: commentQuantity }, createComments),
  };
};


const pubishPosts = () => Array.from({ length: MAX_POSTS_QUANTITY }, createPhotoPost);

export {pubishPosts};
