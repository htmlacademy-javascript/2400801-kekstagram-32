const imgUploadForm = document.querySelector('.img-upload__form');
const smallerButton = imgUploadForm.querySelector('.scale__control--smaller');
const biggerButton = imgUploadForm.querySelector('.scale__control--bigger');
const scaleInput = imgUploadForm.querySelector('.scale__control--value');
const scalingPicture = imgUploadForm.querySelector('.img-upload__preview img');
let scaleNumber = parseInt(scaleInput.value, 10);
const SCALE_STEP = 25;
const SCALE_MAX = 100;
const SCALE_MIN = 25;
const SCALE_START_VALUE = 100;


smallerButton.addEventListener('click', () => {
  if (scaleNumber > SCALE_MIN) {
    scaleInput.value = `${scaleNumber - SCALE_STEP}%`;
  }
  scaleNumber = parseInt(scaleInput.value, 10);
  scaleInput.dispatchEvent(new Event('change'));
});

biggerButton.addEventListener('click', () => {
  if (scaleNumber < SCALE_MAX) {
    scaleInput.value = `${scaleNumber + SCALE_STEP}%`;
  }
  scaleNumber = parseInt(scaleInput.value, 10);
  scaleInput.dispatchEvent(new Event('change'));
});

scaleInput.addEventListener('change', () => {
  scalingPicture.style.transform = `scale(${ scaleNumber * 0.01})`;
});

const resetScaleValue = () => {
  scaleInput.value = `${SCALE_START_VALUE}%`;
  scalingPicture.style.transform = `scale(${ SCALE_START_VALUE * 0.01})`;
};

export {resetScaleValue};
