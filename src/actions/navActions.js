import { ROOT_CHANGED, INITIALIZED } from "../utils/constants";

const appInitialized = () => {
  return dispatch => {
    changeAppRoot(dispatch, "login");
  };
};

const login = () => {
  return dispatch => {
    changeAppRoot(dispatch, "after-login");
  };
};

const changeAppRoot = (dispatch, payload) => {
  dispatch({
    type: ROOT_CHANGED,
    root: payload
  });
};

export { appInitialized, login };
