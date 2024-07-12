import {pubishPosts} from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureContainer = document.querySelector('.pictures');
const pictureFragment = document.createDocumentFragment();
const postsData = pubishPosts();

postsData.forEach(({url, description, likes, comments}) => {
  const newPicture = pictureTemplate.cloneNode(true);
  const pictureImage = newPicture.querySelector('.picture__img');
  pictureImage.src = `photos/${url}.jpg`;
  pictureImage.alt = description;
  newPicture.querySelector('.picture__likes').textContent = likes;
  newPicture.querySelector('.picture__comments').textContent = comments.length;
  pictureFragment.append(newPicture);
});

pictureContainer.append(pictureFragment);
