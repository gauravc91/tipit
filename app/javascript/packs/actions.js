import { ActionTypes } from "./constants";

export const updateBg = url => {
  return {
    type: ActionTypes.UPDATE_BG,
    url
  };
};

export const updateLogo = url => {
  return {
    type: ActionTypes.UPDATE_LOGO,
    url
  };
};

export const updateLogoSize = size => {
  return {
    type: ActionTypes.UPDATE_LOGO_SIZE,
    size
  };
};

export const updateTitle = (key, value) => {
  return {
    type: ActionTypes.UPDATE_TITLE,
    key,
    value
  };
};

export const updateDescription = text => {
  return {
    type: ActionTypes.UPDATE_DESCRIPTION,
    text
  };
};

export const updateToolbar = element => {
  return {
    type: ActionTypes.UPDATE_TOOLBAR,
    element
  };
};
