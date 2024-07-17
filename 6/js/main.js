import {createPosts} from './data.js';
import {generateThumbnails} from './thumbnail.js';
import './picture-modal.js';

const currentPictures = createPosts();

generateThumbnails(currentPictures);

export {currentPictures};
