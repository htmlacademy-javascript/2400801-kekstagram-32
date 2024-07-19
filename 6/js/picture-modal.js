import { isEscapeKey } from './utils.js';
import { currentPictures } from './main.js';


const bigPictureModal = document.querySelector('.big-picture');
const body = document.querySelector('body');

const closeBigPictureButton = bigPictureModal.querySelector('.big-picture__cancel');

const loadCommentsButton = bigPictureModal.querySelector('.comments-loader');
const commentShownCount = bigPictureModal.querySelector('.social__comment-shown-count');
const commentTotalCount = bigPictureModal.querySelector('.social__comment-total-count');
const commentsList = bigPictureModal.querySelector('.social__comments');

const loadMoreComments = () => {
  if (Number(commentShownCount.textContent) < Number(commentTotalCount.textContent)) {
    loadCommentsButton.addEventListener('click', () => {
      for(let i = 0; i < 5; i++) {
        const hiddenComment = commentsList.querySelector('.social__comments .hidden');
        hiddenComment.classList.remove('hidden');
        commentShownCount.textContent = Number(commentShownCount.textContent) + 1;
        if (Number(commentShownCount.textContent) === Number(commentTotalCount.textContent)) {
          loadCommentsButton.classList.add('hidden');
        }
      }
    });

  } else {
    loadCommentsButton.classList.add('hidden');
  }
};

const fillBigPicture = (bigPicture, {url, likes, comments, description}) => {
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__comment-total-count').textContent = comments.length;
  bigPicture.querySelector('.social__comment-shown-count').textContent = comments.length <= 5 ? comments.length : 5;
  bigPicture.querySelector('.social__caption').textContent = description;

  commentsList.innerHTML = '';
  const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');
  const commentFragment = document.createDocumentFragment();
  for (let i = 0; i < comments.length; i++) {

    const comment = commentTemplate.cloneNode(true);
    comment.querySelector('.social__picture').src = comments[i].avatar;
    comment.querySelector('.social__picture').alt = comments[i].name;
    comment.querySelector('.social__text').textContent = comments[i].message;
    if(i >= 5) {
      comment.classList.add('hidden');
    }
    commentFragment.append(comment);
  }
  commentsList.append(commentFragment);
  loadMoreComments();
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


document.addEventListener('click', (evt) => {
  if(evt.target.closest('.picture')) {
    openBigPicture();
    const currentId = Number(evt.target.closest('.picture').id);
    const currentPicture = currentPictures.find(({id}) => id === currentId);
    fillBigPicture(bigPictureModal, currentPicture);
  }
});


