const RAUSCH = "#FF5A5F";
const BABU = "#00A699";
const ARCHES = "#FC642D";
const HOF = "#484848";
const FOGGY = "#767676";
const CLOUDS = "#ecf0f1";
const BLACK = "#000";
const WHITE = "#FFF";
const DARK_BG = "#301934";
const common = {
  PRIMARY: RAUSCH,
  SUCCESS: BABU,
  ERROR: RAUSCH,
  WHITE: WHITE,
  TEXT_GRAY: CLOUDS,
};

const light = {
  ...common,
  BACKGROUND: WHITE,
  TEXT: BLACK,
  TEXT_SECONDARY: FOGGY,
};

const dark = {
  ...common,
  BACKGROUND: DARK_BG,
  TEXT: WHITE,
  TEXT_SECONDARY: CLOUDS,
};

export const colors = { light, dark };
