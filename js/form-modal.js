import { isEscapeKey } from './utils.js';
import { checkValid, resetValidation, resetFields } from './form-validaton.js';
import { resetScaleValue } from './scale-picture.js';
import { initSlider, resetSlider } from './add-filter.js';
import { showLoadError, showLoadSuccess} from './alert-handling.js';
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

const deleteEscapeFormHandler = () => {
  document.removeEventListener('keydown', onDocumentKeydown);
};
const setEscapeFormHandler = () => {
  document.addEventListener('keydown', onDocumentKeydown);
};

const openForm = () => {
  imgUploadContainer.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeForm = () => {
  imgUploadInput.value = '';
  imgUploadContainer.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  resetValidation();
  resetScaleValue();
  resetSlider();
  resetFields();
};

const changeSubmitButton = (isSent) => {
  if (isSent) {
    formSubmitButton.disabled = false;
    formSubmitButton.textContent = 'Опубликовать';
  } else {
    formSubmitButton.disabled = true;
    formSubmitButton.textContent = 'Отправляю...';
  }
};

const successLoadForm = () => {
  closeForm();
  showLoadSuccess();
};

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (checkValid()) {
    let process = false;
    changeSubmitButton(process);
    const formData = new FormData(evt.target);
    sendForm(() => {
      process = true;
      successLoadForm();
      changeSubmitButton(process);
    },
    () => {
      process = true;
      showLoadError(deleteEscapeFormHandler, setEscapeFormHandler);
      changeSubmitButton(process);
    }, formData);
  }
});

imgUploadInput.addEventListener('change', openForm);

formCancelButton.addEventListener('click', closeForm);

initSlider();

//убрать слушатель esc с формы, когда открываются сообщения

// удалять слушатель когда убирается сообщение об ошибке