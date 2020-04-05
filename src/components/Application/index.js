import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import { createBrowserHistory } from "history";

import configureStore from "@/state";
import Routes from "@/routes";

import ApplicationLayout from "@/layouts/ApplicationLayout";

import ApplicationLoader from "@/components/ApplicationLoader";

const history = createBrowserHistory();
const store = configureStore(history);

function Application() {
  return (
    <ReduxProvider store={store}>
      <ConnectedRouter history={history}>
        <ApplicationLoader>
          <ApplicationLayout>
            <Routes />
          </ApplicationLayout>
        </ApplicationLoader>
      </ConnectedRouter>
    </ReduxProvider>
  );
}

export default Application;
