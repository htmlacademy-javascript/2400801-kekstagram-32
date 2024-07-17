const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictureContainer = document.querySelector('.pictures');

const createNewPicture = ({id, url, description, likes, comments}) => {
  const newPicture = pictureTemplate.cloneNode(true);
  newPicture.id = id;
  const pictureImage = newPicture.querySelector('.picture__img');
  pictureImage.src = url;
  pictureImage.alt = description;
  newPicture.querySelector('.picture__likes').textContent = likes;
  newPicture.querySelector('.picture__comments').textContent = comments.length;
  return newPicture;
};

const generateThumbnails = (pictures) => {
  const pictureFragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createNewPicture(picture);
    pictureFragment.append(thumbnail);
  });
  pictureContainer.append(pictureFragment);
};

export {generateThumbnails, pictureContainer};

