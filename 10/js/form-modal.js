import { isEscapeKey } from './utils.js';
import { checkValid, resetValidation, resetFields } from './form-validaton.js';
import { resetScaleValue } from './scale-picture.js';
import { initSlider, resetSlider } from './add-filter.js';
import { showLoadError, showLoadSuccess } from './alert-handling.js';
import { sendForm } from './connect-server.js';


const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadInput = imgUploadForm.querySelector('.img-upload__input');
const imgUploadContainer = imgUploadForm.querySelector('.img-upload__overlay');
const formCancelButton = imgUploadForm.querySelector('.img-upload__cancel');
const formSubmitButton = imgUploadForm.querySelector('.img-upload__submit');
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
  resetFields();
};

const blockSubmitButton = () => {
  formSubmitButton.disabled = true;
  formSubmitButton.textContent = 'Отправляю...';
};
const unblockSubmitButton = () => {
  formSubmitButton.disabled = false;
  formSubmitButton.textContent = 'Опубликовать';
};

const successLoadForm = () => {
  closeForm();
  showLoadSuccess();
};


imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (checkValid()) {
    blockSubmitButton();
    const formData = new FormData(evt.target);
    sendForm(() => {
      successLoadForm();
      unblockSubmitButton();
    },
    () => {
      showLoadError();
      unblockSubmitButton();
    }, formData);
  }
});


imgUploadInput.addEventListener('change', openForm);

formCancelButton.addEventListener('click', closeForm);

initSlider();


//сделать так, чтобы форма отправлялась, когда хэштег был введён и стерт, либо поле хэштега было в фокусе и фокус был снят

//убрать слушатель esc с формы, когда открываются сообщения
