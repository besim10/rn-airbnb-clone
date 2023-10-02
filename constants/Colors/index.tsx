const RAUSCH = "#FF5A5F";
const BABU = "#00A699";
const ARCHES = "#FC642D";
const HOF = "#484848";
const FOGGY = "#767676";
const CLOUDS = "#ecf0f1";
const BLACK = "#000";
const WHITE = "#FFF";

const common = {
  PRIMARY: RAUSCH,
  SUCCESS: BABU,
  ERROR: RAUSCH,
};

const light = {
  ...common,
  BACKGROUND: CLOUDS,
  TEXT: BLACK,
  TEXT_SECONDARY: FOGGY,
};

const dark = {
  ...common,
  BACKGROUND: HOF,
  TEXT: WHITE,
  TEXT_SECONDARY: CLOUDS,
};

export const colors = { light, dark };
