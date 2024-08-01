const MIN_HASHTAG_LENGTH = 2;
const MAX_HASHTAG_LENGTH = 20;
const MAX_HASHTAG_QUANTITY = 5;
const MAX_DESCRIPTION_LENGTH = 140;

const imgUploadForm = document.querySelector('.img-upload__form');

const hashtagInput = imgUploadForm.querySelector('.text__hashtags');
const descriptionInput = imgUploadForm.querySelector('.text__description');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const etalonHashtag = /^#[a-zа-яё0-9]+$/i;
const space = /\s+/g;

const normalizeText = (input) => input.value.toLowerCase().replaceAll(space, ' ').trim().split(' ');

const checkMinLength = (input) => {
  const normalizedHashtag = normalizeText(input);
  return normalizedHashtag.every((hashtag) => hashtag.length >= MIN_HASHTAG_LENGTH);
};

const createMinLengthMessage = () => `Не менее ${MIN_HASHTAG_LENGTH} симоволов для одного хештега`;

const checkMaxLength = (input) => {
  const normalizedHashtag = normalizeText(input);
  return normalizedHashtag.every((hashtag) => hashtag.length <= MAX_HASHTAG_LENGTH);
};

const createMaxLengthMessage = () => `Не более ${MAX_HASHTAG_LENGTH} симоволов для одного хештега`;

pristine.addValidator(hashtagInput, () => checkMinLength(hashtagInput), createMinLengthMessage, 2, true);

pristine.addValidator(hashtagInput, () => checkMaxLength(hashtagInput), createMaxLengthMessage, 2);

const checkSymbols = (hashtagText) => {
  const normalizedHashtag = normalizeText(hashtagText);
  return normalizedHashtag.every((hashtag) => etalonHashtag.test(hashtag));
};

pristine.addValidator(hashtagInput, () => checkSymbols(hashtagInput), 'Хештег начинается с # и содержит только буквы и цифры', 1, true);

const checkQuantity = (input) => {
  const normalizedHashtag = normalizeText(input);
  return normalizedHashtag.length <= MAX_HASHTAG_QUANTITY;
};

const createMaxQuantityMessage = () => `Можно ввести не более ${MAX_HASHTAG_QUANTITY} хештегов`;

pristine.addValidator(hashtagInput, () => checkQuantity(hashtagInput), createMaxQuantityMessage, 1, true);

const checkReplay = (input) => {
  const normalizedHashtag = normalizeText(input);
  const uniques = [...new Set(normalizedHashtag)];
  return normalizedHashtag.length === uniques.length;
};

pristine.addValidator(hashtagInput, () => checkReplay(hashtagInput), 'Хэштеги не должны повторяться', 1, true);

const checkDescriptionLength = (input) => input.value.length <= MAX_DESCRIPTION_LENGTH;

const createMaxLengthDescriptionMessage = () => `Длина описания не должна превышать ${MAX_DESCRIPTION_LENGTH} символов`;

pristine.addValidator(descriptionInput, () => checkDescriptionLength(descriptionInput), createMaxLengthDescriptionMessage);

const resetValidation = () => {
  pristine.reset();
};

const checkValid = () => pristine.validate();

const resetFields = () => {
  hashtagInput.value = '';
  descriptionInput.value = '';
};

export {resetValidation, checkValid, resetFields};

// сделать прерывание показа ошибок в полях и установить приоритеты.
