import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import locales from "./locales";
import species from "./species";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    locales,
    species,
  });

export default createRootReducer;
