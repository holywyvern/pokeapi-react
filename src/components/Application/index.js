import React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserHistory } from "history";
import configureStore from "@/state";

const history = createBrowserHistory();
const store = configureStore(history);

function Application() {
  return (
    <ReduxProvider store={store}>
      <div className="page"></div>
    </ReduxProvider>
  );
}

export default Application;
