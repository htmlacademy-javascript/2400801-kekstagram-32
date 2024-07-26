import {createPosts} from './data.js';
import {generateThumbnails} from './thumbnail.js';
import './picture-modal.js';
import './form-modal.js';

import './add-filter.js';

const currentPictures = createPosts();

generateThumbnails(currentPictures);


