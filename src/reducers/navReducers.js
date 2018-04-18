import { ROOT_CHANGED } from "../utils/constants";

const initialState = {
  root: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ROOT_CHANGED:
      return {
        root: action.root
      };
    default:
      return state;
  }
};
