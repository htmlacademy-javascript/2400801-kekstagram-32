import { showDataError } from './alert-handling.js';
import {getData} from './connect-server.js';
import {showFilters, setFilterClick } from './filters.js';
import { renderThumbnails } from './thumbnail.js';
import './form-modal.js';
import './picture-upload.js';

getData((pictures) => {
  renderThumbnails(pictures);
  showFilters();
  setFilterClick(pictures);
},
showDataError);
