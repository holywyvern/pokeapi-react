import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import { createBrowserHistory } from "history";

import configureStore from "@/state";
import Router from "@/routes";

const history = createBrowserHistory();
const store = configureStore(history);

function Application() {
  return (
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <Router />
      </ConnectedRouter>
    </ReduxProvider>
  );
}

export default Application;
