//import { isEscapeKey } from './utils.js';

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

const showDataError = () => {
  body.append(dataErrorMessage);
  setTimeout(() => {
    dataErrorMessage.remove();
  }, ERROR_SHOW_TIMER);
};

const showLoadError = () => {
  body.append(loadErrorMessage);
};

const showLoadSuccess = () => {
  body.append(loadSuccessMessage);
};

loadSuccessButton.addEventListener('click', () => {
  loadSuccessMessage.remove();
});

loadErrorButton.addEventListener('click', () => {
  loadErrorMessage.remove();
});

// document.addEventListener('keydown', () => {
//   if (isEscapeKey()) {
//     loadSuccessMessage.remove();
//     loadErrorMessage.remove();
//   }
// });

document.addEventListener('click', () => {
  loadSuccessMessage.remove();
  loadErrorMessage.remove();
});

export {showDataError, showLoadError, showLoadSuccess};
