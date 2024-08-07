const MIN_POSTS_QUANTITY = 1;
const MAX_POSTS_QUANTITY = 25;
const MIN_COMMENTATORS_QUANTITY = 1;
const MAX_COMMENTATORS_QUANTITY = 6;
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENT_QUANTITY = 0;
const MAX_COMMENT_QUANTITY = 30;
const MIN_COMMENT_ID_QUANTITY = 1;
const MAX_COMMENT_ID_QUANTITY = 20000;

const effect = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

const effectToFilter = {
  [effect.CHROME]: {
    filter: 'grayscale',
    unit: ''
  },
  [effect.SEPIA]: {
    filter: 'sepia',
    unit: ''
  },
  [effect.MARVIN]: {
    filter: 'invert',
    unit: '%'
  },
  [effect.PHOBOS]: {
    filter: 'blur',
    unit: 'px'
  },
  [effect.HEAT]: {
    filter: 'brightness',
    unit: ''
  }
};

const effectToSliderOption = {
  [effect.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [effect.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [effect.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1,
  },
  [effect.MARVIN]: {
    min: 0,
    max: 100,
    step: 1,
  },
  [effect.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1,
  },
  [effect.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1,
  }
};

export {
  MIN_POSTS_QUANTITY,
  MAX_POSTS_QUANTITY,
  MIN_COMMENTATORS_QUANTITY,
  MAX_COMMENTATORS_QUANTITY,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENT_QUANTITY,
  MAX_COMMENT_QUANTITY,
  MIN_COMMENT_ID_QUANTITY,
  MAX_COMMENT_ID_QUANTITY,
  effect,
  effectToFilter,
  effectToSliderOption
};
