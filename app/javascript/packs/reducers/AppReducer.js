import { PLUS_ONE } from "../constants";

let AppReducer = function(state = { count: 0 }, action) {
  switch (action.type) {
    case PLUS_ONE:
      return {
        ...state,
        count: state.count + 1
      };
    default:
      return state;
  }
};

export default AppReducer;
