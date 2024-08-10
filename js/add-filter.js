import { effect, effectToFilter, effectToSliderOption } from './constants.js';

const imgUploadForm = document.querySelector('.img-upload__form');
const sliderElement = imgUploadForm.querySelector('.effect-level__slider');
const imageElement = imgUploadForm.querySelector('.img-upload__preview img');
const effects = imgUploadForm.querySelector('.effects');
const sliderContainer = imgUploadForm.querySelector('.img-upload__effect-level');
const effectValue = imgUploadForm.querySelector('.effect-level__value');

let chosenEffect = effect.DEFAULT;

const isDefault = () => chosenEffect === effect.DEFAULT;

const setImageStyle = () => {
  if (isDefault()) {
    imageElement.style.filter = null;
  } else{
    const {value} = effectValue;
    const {filter, unit} = effectToFilter[chosenEffect];
    imageElement.style.filter = `${filter}(${value}${unit})`;
  }
};

const onSliderUpdate = () => {
  effectValue.value = sliderElement.noUiSlider.get();
  setImageStyle();
};

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const createSlider = ({min, max, step}) => {
  noUiSlider.create(sliderElement, {
    range: {
      min: min,
      max: max,
    },
    start: max,
    step: step,
    connect: 'lower',
    format: {
      to: (value) => Number(value),
      from: (value) => Number(value),
    }
  });
  sliderElement.noUiSlider.on('update', onSliderUpdate);
  hideSlider();
};

const updateSlider = ({min, max, step}) => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: min,
      max: max,
    },
    start: max,
    step: step,
  });
};

const setSlider = () => {
  if (isDefault()) {
    hideSlider();
  } else {
    updateSlider(effectToSliderOption[chosenEffect]);
    showSlider();
  }
};

const setEffect = (currentEffect) => {
  chosenEffect = currentEffect;
  setSlider();
  setImageStyle();
};

const resetSlider = () => {
  setEffect(effect.DEFAULT);
  effects.querySelector('#effect-none').checked = true;
};

const onEffectsChange = (evt) => {
  setEffect(evt.target.value);
};

const initSlider = () => {
  createSlider(effectToSliderOption[chosenEffect]);
  effects.addEventListener('change', onEffectsChange);
};

export {initSlider, resetSlider};
