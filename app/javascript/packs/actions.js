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

export const updateTitle = text => {
  return {
    type: ActionTypes.UPDATE_TITLE,
    text
  };
};

export const updateDescription = text => {
  return {
    type: ActionTypes.UPDATE_DESCRIPTION,
    text
  };
};
