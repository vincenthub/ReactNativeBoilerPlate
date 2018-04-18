import { combineReducers } from "redux";

import nav from "./navReducers";
import appData from "./dataReducers";

const AppReducer = combineReducers({
  nav,
  appData
});

export default AppReducer;
