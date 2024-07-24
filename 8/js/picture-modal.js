import { isEscapeKey } from './utils.js';

const bigPictureModal = document.querySelector('.big-picture');
const body = document.querySelector('body');

const closeBigPictureButton = bigPictureModal.querySelector('.big-picture__cancel');

const loadCommentsButton = bigPictureModal.querySelector('.comments-loader');
const commentShownCount = bigPictureModal.querySelector('.social__comment-shown-count');
const commentTotalCount = bigPictureModal.querySelector('.social__comment-total-count');
const commentsList = bigPictureModal.querySelector('.social__comments');

const SHOWN_COMMENTS = 5;

const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const localComments = [];
let renderedCommentsCount = 0;
let total = 0;

const renderLoader = () => {
  if (renderedCommentsCount < total) {
    loadCommentsButton.classList.remove('hidden');
  } else {
    loadCommentsButton.classList.add('hidden');
  }
};
const renderStatistic = () => {
  commentTotalCount.textContent = total;
  commentShownCount.textContent = renderedCommentsCount;
};

const renderComments = () => {
  const commentFragment = document.createDocumentFragment();

  localComments.splice(0, SHOWN_COMMENTS).forEach((commentElement) => {
    const comment = commentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').src = commentElement.avatar;
    comment.querySelector('.social__picture').alt = commentElement.name;
    comment.querySelector('.social__text').textContent = commentElement.message;
    commentFragment.append(comment);
    renderedCommentsCount++;
  });
  commentsList.append(commentFragment);
  renderLoader();
  renderStatistic();
};

const fillBigPicture = ({url, likes, comments, description}) => {
  bigPictureModal.querySelector('.big-picture__img img').src = url;
  bigPictureModal.querySelector('.likes-count').textContent = likes;
  bigPictureModal.querySelector('.social__caption').textContent = description;

  localComments.length = 0;
  localComments.push(...comments.slice());
  commentsList.innerHTML = '';
  renderedCommentsCount = 0;
  total = comments.length;
  renderComments();
};

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    bigPictureModal.classList.add('hidden');
  }
};

const openBigPicture = () => {
  bigPictureModal.classList.remove('hidden');
  body.classList.add('.modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeBigPicture = () => {
  bigPictureModal.classList.add('hidden');
  body.classList.remove('.modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

closeBigPictureButton.addEventListener('click', closeBigPicture);

loadCommentsButton.addEventListener('click', renderComments);

const showModal = (photo) => {
  openBigPicture();
  fillBigPicture(photo);
};

export {showModal};
