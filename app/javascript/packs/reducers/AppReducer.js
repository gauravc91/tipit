import { ActionTypes } from "../constants.js";

let AppReducer = function(
  state = {
    bg: null,
    logo: null,
    logo_size: 2,
    toolbar: null,
    title: {
      text: null,
      font_size: 20,
      font_style: "normal",
      font_weight: "normal"
    },
    description: "[Click to Edit]"
  },
  action
) {
  switch (action.type) {
    case ActionTypes.UPDATE_BG:
      return {
        ...state,
        bg: action.url
      };
    case ActionTypes.UPDATE_LOGO:
      return {
        ...state,
        logo: action.url
      };
    case ActionTypes.UPDATE_LOGO_SIZE:
      return {
        ...state,
        logo_size: action.size
      };
    case ActionTypes.UPDATE_TITLE:
      return {
        ...state,
        title: {
          ...state.title,
          [action.key]: action.value
        }
      };
    case ActionTypes.UPDATE_DESCRIPTION:
      return {
        ...state,
        description: action.text
      };
    case ActionTypes.UPDATE_TOOLBAR:
      return {
        ...state,
        toolbar: action.element
      };
    default:
      return state;
  }
};

export default AppReducer;
