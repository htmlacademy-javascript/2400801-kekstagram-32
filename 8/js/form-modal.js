import { isEscapeKey } from './utils.js';

const imgUploadInput = document.querySelector('.img-upload__input');
export const imgUploadForm = document.querySelector('.img-upload__overlay');
const formCancelButton = document.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    imgUploadForm.classList.add('hidden');
  }
};

const openForm = () => {
  imgUploadForm.classList.remove('hidden');
  body.classList.add('.modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeForm = () => {
  imgUploadInput.value = '';
  imgUploadForm.classList.add('hidden');
  body.classList.remove('.modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);

};

imgUploadInput.addEventListener('change', openForm);

formCancelButton.addEventListener('click', closeForm);

export {onDocumentKeydown};
