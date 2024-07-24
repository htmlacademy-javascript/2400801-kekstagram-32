import { showModal } from './picture-modal.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureContainer = document.querySelector('.pictures');

const localPictures = [];

const createNewPicture = ({id, url, description, likes, comments}) => {
  const newPicture = pictureTemplate.cloneNode(true);
  newPicture.dataset.id = id;
  const pictureImage = newPicture.querySelector('.picture__img');
  pictureImage.src = url;
  pictureImage.alt = description;
  newPicture.querySelector('.picture__likes').textContent = likes;
  newPicture.querySelector('.picture__comments').textContent = comments.length;
  return newPicture;
};

const generateThumbnails = (pictures) => {
  localPictures.length = 0;
  localPictures.push(...pictures.slice());
  const pictureFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createNewPicture(picture);
    pictureFragment.append(thumbnail);
  });
  pictureContainer.append(pictureFragment);
};

pictureContainer.addEventListener('click', (evt) => {
  if(evt.target.closest('.picture')) {
    const currentId = Number(evt.target.closest('.picture').dataset.id);
    const currentPicture = localPictures.find(({id}) => id === currentId);
    showModal(currentPicture);
  }
});

export {generateThumbnails};

