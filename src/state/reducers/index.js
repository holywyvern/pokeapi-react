import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import locales from "./locales";
import species from "./species";
import details from "./details";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    locales,
    species,
    details,
  });

export default createRootReducer;
