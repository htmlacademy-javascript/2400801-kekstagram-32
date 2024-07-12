import {pubishPosts} from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureContainer = document.querySelector('.pictures');
const pictureFragment = document.createDocumentFragment();
const postsData = pubishPosts();

postsData.forEach((post) => {
  const newPicture = pictureTemplate.cloneNode(true);
  const pictureImage = newPicture.querySelector('.picture__img');
  pictureImage.src = `photos/${post.url}.jpg`;
  pictureImage.alt = post.description;
  const pictureLikes = newPicture.querySelector('.picture__likes');
  pictureLikes.textContent = post.likes;
  const pictureComments = newPicture.querySelector('.picture__comments');
  const postComments = post.comments;
  pictureComments.textContent = postComments.length;
  pictureFragment.append(newPicture);
});

pictureContainer.append(pictureFragment);
