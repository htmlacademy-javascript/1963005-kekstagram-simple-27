const SIZE_SCALE_SETTINGS = {
  min: 25,
  max: 100,
  step: 25,
};

const PHOTO_EFFECTS_SETTINGS = {
  chrome: {
    filter: 'grayscale',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },

  sepia: {
    filter: 'sepia',
    unit: '',
    options: {
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1
    }
  },

  marvin: {
    filter: 'invert',
    unit: '%',
    options: {
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1
    }
  },

  phobos: {
    filter: 'blur',
    unit: 'px',
    options: {
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  },

  heat: {
    filter: 'brightness',
    unit: '',
    options: {
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1
    }
  }
};

export {
  SIZE_SCALE_SETTINGS,
  PHOTO_EFFECTS_SETTINGS
};
