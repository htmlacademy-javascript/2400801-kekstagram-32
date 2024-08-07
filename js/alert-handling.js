import { isEscapeKey } from './utils.js';
import {onEscapeKeydownForm} from './form-modal.js';

const ERROR_SHOW_TIMER = 5000;
const dataErrorTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const loadErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const loadSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const body = document.querySelector('body');

const dataErrorMessage = dataErrorTemplate.cloneNode(true);
const loadErrorMessage = loadErrorTemplate.cloneNode(true);
const loadSuccessMessage = loadSuccessTemplate.cloneNode(true);

const loadErrorButton = loadErrorMessage.querySelector('.error__button');
const loadSuccessButton = loadSuccessMessage.querySelector('.success__button');

const onEscapeKeydownError = (evt) => {
  if (isEscapeKey(evt)) {
    loadErrorMessage.remove();
  }
  document.removeEventListener('keydown', onEscapeKeydownError);
  document.addEventListener('keydown', onEscapeKeydownForm);
};

const closeErrorByEscape = () => {
  document.addEventListener('keydown', onEscapeKeydownError);
};

const onEscapeKeydownSuccess = (evt) => {
  if (isEscapeKey(evt)) {
    loadSuccessMessage.remove();
  }
  document.removeEventListener('keydown', onEscapeKeydownSuccess);
};

const closeSuccessByEscape = () => {
  document.addEventListener('keydown', onEscapeKeydownSuccess);
};

const showDataError = () => {
  body.append(dataErrorMessage);
  setTimeout(() => {
    dataErrorMessage.remove();
  }, ERROR_SHOW_TIMER);
};

const showLoadError = () => {
  body.append(loadErrorMessage);
  closeErrorByEscape();
  document.removeEventListener('keydown', onEscapeKeydownForm);
};

const showLoadSuccess = () => {
  body.append(loadSuccessMessage);
  closeSuccessByEscape();
};

loadSuccessMessage.addEventListener('click', (evt) => {
  if (evt.target === loadSuccessMessage || evt.target === loadSuccessButton) {
    loadSuccessMessage.remove();
    document.removeEventListener('keydown', onEscapeKeydownSuccess);

  }
});

loadErrorMessage.addEventListener('click', (evt) => {
  if (evt.target === loadErrorMessage || evt.target === loadErrorButton) {
    loadErrorMessage.remove();
    document.removeEventListener('keydown', onEscapeKeydownError);
    document.addEventListener('keydown', onEscapeKeydownForm);
  }
});

export {showDataError, showLoadError, showLoadSuccess};

