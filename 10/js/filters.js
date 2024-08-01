const filters = document.querySelector('.img-filters');

const showFilters = () => {
  filters.classList.remove('img-filters--inactive');
};

export {showFilters};
