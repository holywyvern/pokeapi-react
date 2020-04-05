import React from "react";
import { Switch, Route } from "react-router";

import routes from "./config";

function Routes() {
  return (
    <Switch>
      {routes.map(({ key, ...props }) => (
        <Route key={key} {...props} />
      ))}
    </Switch>
  );
}

export default Routes;
