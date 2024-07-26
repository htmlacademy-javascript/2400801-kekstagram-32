import { isEscapeKey } from './utils.js';
import { checkValid, resetValidation } from './form-validaton.js';
import { resetScaleValue } from './scale-picture.js';
import { initSlider, resetSlider } from './add-filter.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const imgUploadContainer = imgUploadForm.querySelector('.img-upload__overlay');
const formCancelButton = imgUploadForm.querySelector('.img-upload__cancel');
const body = document.querySelector('body');

const onDocumentKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    evt.preventDefault();
    if(!(imgUploadForm.querySelector('.text__hashtags') === document.activeElement) && !(imgUploadForm.querySelector('.text__description') === document.activeElement)) {
      imgUploadContainer.classList.add('hidden');
      imgUploadInput.value = '';
    }
  }
};

const openForm = () => {
  imgUploadContainer.classList.remove('hidden');
  body.classList.add('.modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeForm = () => {
  imgUploadInput.value = '';
  imgUploadContainer.classList.add('hidden');
  body.classList.remove('.modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  resetValidation();
  resetScaleValue();
  resetSlider();
};

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  checkValid();
});

imgUploadInput.addEventListener('change', openForm);

formCancelButton.addEventListener('click', closeForm);

initSlider();

