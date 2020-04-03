import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import locales from "./locales";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    locales,
  });

export default createRootReducer;
