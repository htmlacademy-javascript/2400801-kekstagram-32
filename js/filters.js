import { renderThumbnails } from './thumbnail.js';
import { getRandomArrayElement, debounce} from './utils.js';

const filters = document.querySelector('.img-filters');
const RANDOM_LENGTH = 10;
const RENDERER_SORTING_DELAY = 500;

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

const setActiveButton = (button) => {
  filters.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
  button.classList.add('img-filters__button--active');
};

const Sorting = {
  'filter-default': (pictures) => pictures,
  'filter-random': function(pictures) {
    let randomPictures = [];
    while (randomPictures.length !== RANDOM_LENGTH) {
      const somePicture = getRandomArrayElement(pictures);
      randomPictures.push(somePicture);
      randomPictures = randomPictures.filter((el, i, arr) => arr.indexOf(el) === i);
    }
    return randomPictures;
  },
  'filter-discussed': function(pictures) {
    const quantityComments = pictures.map((picture) => ({id:picture.id, comments: picture.comments.length}));
    const sortedQuantityComments = quantityComments.sort((a,b) => {
      if (a.comments > b.comments) {
        return -1;
      }
      if (a.comments < b.comments) {
        return 1;
      }
      return 0;
    });
    const popularPictures = sortedQuantityComments.map((picture) => pictures[picture.id]);
    return popularPictures;
  }
};

const showSorting = (pictures, button) => {

  renderThumbnails(Sorting[button.id](pictures));
};

const setFilterClick = (pictures) => {
  filters.addEventListener('click', debounce((evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      showSorting(pictures, evt.target);
    }
  }, RENDERER_SORTING_DELAY));
};

filters.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    setActiveButton(evt.target);
  }
});

export {showFilters, setFilterClick};
