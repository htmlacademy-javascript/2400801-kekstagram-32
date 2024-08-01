import { showDataError } from './alert-handling.js';
import { renderThumbnails } from './thumbnail.js';
import { showFilters } from './filters.js';

const getData = () => {
  fetch('https://32.javascript.htmlacademy.pro/kekstagram/data')
    .then((response) => response.json())
    .then((pictures) => {
      renderThumbnails(pictures);
    })
    .then(() => {
      showFilters();
    })
    .catch(() => {
      showDataError();
    });
};

const sendForm = (onSucces, onError, data) => {
  fetch(
    'https://32.javascript.htmlacademy.pro/kekstagram',
    {
      method: 'POST',
      body: data,
    },
  ).then(() => onSucces())
    .catch(() => {
      onError();
    });
};


export {getData, sendForm};
