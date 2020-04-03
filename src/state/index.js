import { applyMiddleware, compose, createStore } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";

import thunk from "redux-thunk";

export default function configureStore(history) {
  const store = createStore(
    createRootReducer(history),
    {},
    compose(applyMiddleware(routerMiddleware(history), thunk))
  );
  return store;
}
