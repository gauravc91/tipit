import { PLUS_ONE } from "./constants";

const actions = {
  plusOne: function() {
    return {
      type: PLUS_ONE
    };
  }
};

export default actions;
